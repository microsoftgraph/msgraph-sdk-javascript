/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Range } from "../Range";

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
}
