/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { GraphClientError } from "../../../GraphClientError";
import { Range } from "../../../Range";
import { UploadResult } from "../UploadResult";

/**
 * Interface enabling progress handling with callbacks.
 */
export interface UploadEventHandlers {
	/**
	 * Parameters that are passed into the progress, completed, failure callback options.
	 */
	extraCallbackParam?: unknown;
	/**
	 * Callback function called on each slice upload during the LargeFileUploadTask.upload() process
	 */
	progress?: (range?: Range, extraCallbackParam?: unknown) => void;
	/**
	 *  Callback function called when the LargeFileUploadTask.upload() is successfully completed.
	 */
	completed?: (upload?: UploadResult, extraCallbackParam?: unknown) => void;
	/**
	 * Callback function called when the LargeFileUploadTask.upload() fails or errors out
	 */
	failure?: (error?: GraphClientError, extraCallbackParam?: unknown) => void;
}
