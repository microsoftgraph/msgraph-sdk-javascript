/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module OneDriveLargeFileUploadTaskUtil
 */

/**
 * @constant
 * Default value for the rangeSize
 * Recommended size is between 5 - 10 MB {@link https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/driveitem_createuploadsession#best-practices}
 */
const DEFAULT_FILE_SIZE: number = 5 * 1024 * 1024;

/**
 * @constant
 * Rounds off the given value to a multiple of 320 KB
 * @param {number} value - The value
 * @returns The rounded off value
 */
const roundTo320KB = (value: number): number => {
	if (value > 320 * 1024) {
		value = Math.floor(value / (320 * 1024)) * 320 * 1024;
	}
	return value;
};

/**
 * @constant
 * Get the valid rangeSize for a file slicing (validity is based on the constrains mentioned in here
 * {@link https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/driveitem_createuploadsession#upload-bytes-to-the-upload-session})
 *
 * @param {number} [rangeSize = DEFAULT_FILE_SIZE] - The rangeSize value.
 * @returns The valid rangeSize
 */
export const getValidRangeSize = (rangeSize: number = DEFAULT_FILE_SIZE): number => {
	const sixtyMB = 60 * 1024 * 1024;
	if (rangeSize > sixtyMB) {
		rangeSize = sixtyMB;
	}
	return roundTo320KB(rangeSize);
};
