/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { GraphClientError } from "../../../GraphClientError";
import { Range } from "../../../Range";
import { UploadResult } from "../UploadResult";

/**
 * Interface enabling progress handling with callbacks.
 */
export interface Progress {
	/**
	 * Parameters that are passed into the progress, completed, failure callback options.
	 */
	extraCallbackParams?: unknown;
	/**
	 * Callback function called on each slice upload during the LargeFileUploadTask.upload() process
	 */
	progress?: (range?: Range, extraCallbackParams?: unknown) => void;
	/**
	 *  Callback function called when the LargeFileUploadTask.upload() is successfully complete
	 */
	completed?: (upload?: UploadResult, extraCallbackParams?: unknown) => void;
	/**
	 * Callback function called when the LargeFileUploadTask.upload() fails or errors out
	 */
	failure?: (error?: GraphClientError, extraCallbackParams?: unknown) => void;
}
