import { GraphClientError } from "../../../GraphClientError";
import { Range } from "../../../Range";
import { UploadResult } from "../UploadResult";

export interface Progress {
	progress?: (range: Range, options?: unknown) => void;
	completed?: (upload: UploadResult) => void;
	failure?: (error: GraphClientError) => void;
}
