/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * Class representing a successful file upload result
 */
export class UploadResult {
	/**
	 * @private
	 * Location value looked up in the response header
	 */
	private _location: string;

	/**
	 * @private
	 * Response body of the final raw response
	 */
	private _responseBody: unknown;

	/**
	 * @public
	 * Get of the location value.
	 * Location value is looked up in the response header
	 */
	public get location(): string {
		return this._location;
	}

	/**
	 * @public
	 * Set the location value
	 * Location value is looked up in the response header
	 */
	public set location(location: string) {
		this._location = location;
	}

	/**
	 * @public
	 * Get The response body from the completed upload response
	 */
	public get responseBody() {
		return this._responseBody;
	}

	/**
	 * @public
	 * Set the response body from the completed upload response
	 */
	public set responseBody(responseBody: unknown) {
		this._responseBody = responseBody;
	}

	/**
	 * @public
	 * @param {responseBody} responsebody - The response body from the completed upload response
	 * @param {location} location - The location value from the headers from the completed upload response
	 */
	public constructor(responseBody: unknown, location: string) {
		// Response body or the location parameter can be undefined.
		this._location = location;
		this._responseBody = responseBody;
	}

	/**
	 * @public
	 * @param {responseBody} responseBody - The response body from the completed upload response
	 * @param {responseHeaders} responseHeaders - The headers from the completed upload response
	 */
	public static CreateUploadResult(responseBody?: unknown, responseHeaders?: Headers) {
		return new UploadResult(responseBody, responseHeaders.get("location"));
	}
}
