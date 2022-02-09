import { GraphClientError } from "../../../GraphClientError";
import { FileObject, SliceType } from "../../LargeFileUploadTask";
import { Range } from "../Range";

/**
 * @interface
 * Interface to store slice of a stream and range of the slice.
 * @property {Buffer} fileSlice - The slice of the stream
 * @property {Range} range - The range of the slice
 */
interface SliceRecord {
	fileSlice: Buffer;
	range: Range;
}

/**
 * @class
 * FileObject class for Readable Stream upload
 */
export class StreamUpload implements FileObject<NodeStream> {
	/**
	 * @private
	 * Represents a cache of the last attempted upload slice.
	 * This can be used when resuming a previously failed slice upload.
	 */
	private previousSlice: SliceRecord;

	public constructor(public content: NodeStream, public name: string, public size: number) {
		if (!content || !name || !size) {
			throw new GraphClientError("Please provide the Readable Stream content, name of the file and size of the file");
		}
	}

	/**
	 * @public
	 * Slices the file content to the given range
	 * @param {Range} range - The range value
	 * @returns The sliced file part
	 */
	public async sliceFile(range: Range): Promise<SliceType> {
		let rangeSize = range.maxValue - range.minValue + 1;
		/* readable.readable Is true if it is safe to call readable.read(),
		 * which means the stream has not been destroyed or emitted 'error' or 'end'
		 */
		const bufs = [];

		/**
		 * The sliceFile reads the first `rangeSize` number of bytes from the stream.
		 * The previousSlice property is used to seek the range of bytes in the previous slice.
		 * Suppose, the sliceFile reads bytes from `10 - 20` from the stream but the upload of this slice fails.
		 * When the user resumes, the stream will have bytes from position 21.
		 * The previousSlice.Range is used to compare if the requested range is cached in the previousSlice property or present in the Readable Stream.
		 */
		if (this.previousSlice) {
			if (range.minValue < this.previousSlice.range.minValue) {
				throw new GraphClientError("An error occurred while uploading the stream. Please restart the stream upload from the first byte of the file.");
			}

			if (range.minValue < this.previousSlice.range.maxValue) {
				const previousRangeMin = this.previousSlice.range.minValue;
				const previousRangeMax = this.previousSlice.range.maxValue;

				// Check if the requested range is same as previously sliced range
				if (range.minValue === previousRangeMin && range.maxValue === previousRangeMax) {
					return this.previousSlice.fileSlice;
				}

				/**
				 * The following check considers a possibility
				 * of an upload failing after some of the bytes of the previous slice
				 * were successfully uploaded.
				 * Example - Previous slice range - `10 - 20`. Current requested range is `15 - 20`.
				 */
				if (range.maxValue === previousRangeMax) {
					return this.previousSlice.fileSlice.slice(range.minValue, range.maxValue + 1);
				}

				/**
				 * If an upload fails after some of the bytes of the previous slice
				 * were successfully uploaded and the new Range.Maximum is greater than the previous Range.Maximum
				 * Example - Previous slice range - `10 - 20`. Current requested range is `15 - 25`,
				 * then read the bytes from position 15 to 20 from previousSlice.fileSlice and read bytes from position 21 to 25 from the Readable Stream
				 */
				bufs.push(this.previousSlice.fileSlice.slice(range.minValue, previousRangeMax + 1));

				rangeSize = range.maxValue - previousRangeMax;
			}
		}

		if (this.content && this.content.readable) {
			if (this.content.readableLength >= rangeSize) {
				bufs.push(this.content.read(rangeSize));
			} else {
				bufs.push(await this.readNBytesFromStream(rangeSize));
			}
		} else {
			throw new GraphClientError("Stream is not readable.");
		}
		const slicedChunk = Buffer.concat(bufs);
		this.previousSlice = { fileSlice: slicedChunk, range };

		return slicedChunk;
	}

	/**
	 * @private
	 * Reads the specified byte size from the stream
	 * @param {number} size - The size of bytes to be read
	 * @returns Buffer with the given length of data.
	 */

	private readNBytesFromStream(size: number): Promise<Buffer> {
		return new Promise((resolve, reject) => {
			const chunks = [];
			let remainder = size;
			let length = 0;
			this.content.on("end", () => {
				if (remainder > 0) {
					return reject(new GraphClientError("Stream ended before reading required range size"));
				}
			});
			this.content.on("readable", () => {
				/**
				 * (chunk = this.content.read(size)) can return null if size of stream is less than 'size' parameter.
				 * Read the remainder number of bytes from the stream iteratively as they are available.
				 */
				let chunk;
				while (length < size && (chunk = this.content.read(remainder)) !== null) {
					length += chunk.length;
					chunks.push(chunk);
					if (remainder > 0) {
						remainder = size - length;
					}
				}

				if (length === size) {
					return resolve(Buffer.concat(chunks));
				}

				if (!this.content || !this.content.readable) {
					return reject(new GraphClientError("Error encountered while reading the stream during the upload"));
				}
			});
		});
	}
}
