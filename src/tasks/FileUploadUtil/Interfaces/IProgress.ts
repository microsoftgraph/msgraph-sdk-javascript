/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { GraphClientError } from "../../../GraphClientError";
import { Range } from "../../../Range";
import { UploadResult } from "../UploadResult";

export interface Progress {
	extraCallBackParams?: unknown;
	progress?: (range?: Range, extraCallBackParams?: unknown) => void;
	completed?: (upload?: UploadResult, extraCallBackParams?: unknown) => void;
	failure?: (error?: GraphClientError, extraCallBackParams?: unknown) => void;
}
