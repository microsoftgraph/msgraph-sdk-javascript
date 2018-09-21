/**
 * @module OneDriveLargeFileUploadTaskUtil
 */
/**
 * Get the valid rangeSize for a file slicing (validity is based on the constrains mentioned in here {@link https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/driveitem_createuploadsession#upload-bytes-to-the-upload-session})
 *
 * @param {number} [rangeSize = DEFAULT_FILE_SIZE] - The rangeSize value.
 * @return The valid rangeSize
 */
export declare const getValidRangeSize: (rangeSize?: number) => number;
