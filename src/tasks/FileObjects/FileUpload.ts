import { Range } from "../../Range";
import { FileObject } from "../LargeFileUploadTask";

export class FileUpload implements FileObject {
	content: ArrayBuffer | Blob;
	name: string;
	size: number;
	public constructor(content: ArrayBuffer | Blob, name: string, size: number) {
		this.content = content;
		this.name = name;
		this.size = size;
	}
	public async sliceFile(range: Range):Promise<ArrayBuffer|Blob> {
		return this.content.slice(range.minValue, range.maxValue);
	}
}
