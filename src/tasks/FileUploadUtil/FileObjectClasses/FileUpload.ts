import { Range } from "../../../Range";
import { FileObject } from "../../LargeFileUploadTask";

export class FileUpload implements FileObject {
	content: ArrayBuffer | Blob | Buffer;
	name: string;
	size: number;
	public constructor(content: ArrayBuffer | Blob | Buffer, name: string, size: number) {
		this.content = content;
		this.name = name;
		this.size = size;
	}
	public async sliceFile(range: Range): Promise<ArrayBuffer | Blob | Buffer> {
		return this.content.slice(range.minValue, range.maxValue + 1);
	}
}
