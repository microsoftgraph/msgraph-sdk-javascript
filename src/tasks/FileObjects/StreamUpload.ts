import { Readable } from "stream";

import { GraphClientError } from "../../GraphClientError";
import { Range } from "../../Range";
import { FileObject } from "../LargeFileUploadTask";
export class FileUpload implements FileObject {
	content: Readable;
	name: string;
	size: number;
	public constructor(content: Readable, name: string, size: number) {
		if (!content || !name || !size) {
			throw new GraphClientError("Please provide the Readable Stream content, name of the file and size of the file");
		}
		this.content = content;
		this.size = size;
		this.name = name;
	}

	/**
	 * @public
	 * Slices the file content to the given range
	 * @param {Range} range - The range value
	 * @returns The sliced ArrayBuffer or Blob
	 */
	public sliceFile(range: Range): ArrayBuffer | Blob {
		//considering only paused streams
		const rangeSize = range.maxValue - range.minValue + 1;
		let chunk;
		console.log("Stream is readable (new data received in buffer)");
		// Use a loop to make sure we read all currently available data
		while (null !== (chunk = this.content.read(rangeSize))) {
			console.log(`Read ${chunk.length} bytes of data...`);
		}

		//consider completed streams?
		//convert to array buffer
		return chunk;
	}
}
