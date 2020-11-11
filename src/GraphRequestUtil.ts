/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module GraphRequestUtil
 */

/**
 * To hold list of OData query params
 */
export const oDataQueryNames = ["$select", "$expand", "$orderby", "$filter", "$top", "$skip", "$skipToken", "$count"];

/**
 * To construct the URL by appending the segments with "/"
 * @param {string[]} urlSegments - The array of strings
 * @returns The constructed URL string
 */
export const urlJoin = (urlSegments: string[]): string => {
	const removePostSlash = (s) => s.replace(/\/+$/, "");
	const removePreSlash = (s) => s.replace(/^\/+/, "");
	const joiner = (pre, cur) => [removePostSlash(pre), removePreSlash(cur)].join("/");
	const parts = Array.prototype.slice.call(urlSegments);
	return parts.reduce(joiner);
};

/**
 * Serializes the content
 * @param {any} content - The content value that needs to be serialized
 * @returns The serialized content
 *
 * Note:
 * This conversion is required due to the following reasons:
 * Body parameter of Request method of isomorphic-fetch only accepts Blob, ArrayBuffer, FormData, TypedArrays string.
 * Node.js platform does not support Blob, FormData. Javascript File object inherits from Blob so it is also not supported in node. Therefore content of type Blob, File, FormData will only come from browsers.
 * Parallel to ArrayBuffer in javascript, node provides Buffer interface. Node's Buffer is able to send the arbitrary binary data to the server successfully for both Browser and Node platform. Whereas sending binary data via ArrayBuffer or TypedArrays was only possible using Browser. To support both Node and Browser, `serializeContent` converts TypedArrays or ArrayBuffer to `Node Buffer`.
 * If the data received is in JSON format, `serializeContent` converts the JSON to string.
 */

export const serializeContent = (content: any): any => {
	const className: string = content && content.constructor && content.constructor.name;
	if (className === "Buffer" || className === "Blob" || className === "File" || className === "FormData" || typeof content === "string") {
		return content;
	}
	if (className === "ArrayBuffer") {
		content = Buffer.from(content);
	} else if (className === "Int8Array" || className === "Int16Array" || className === "Int32Array" || className === "Uint8Array" || className === "Uint16Array" || className === "Uint32Array" || className === "Uint8ClampedArray" || className === "Float32Array" || className === "Float64Array" || className === "DataView") {
		content = Buffer.from(content.buffer);
	} else {
		try {
			content = JSON.stringify(content);
		} catch (error) {
			throw new Error("Unable to stringify the content");
		}
	}
	return content;
};
/**
 * To hold list of the service root endpoints for Microsoft Graph and Graph Explorer for each national cloud.
 * Set(iterable:Object) is not supported in Internet Explorer. The consumer is recommended to use a suitable polyfill.
 */
export const graphURLs = new Set<string>(["graph.microsoft.com", "graph.microsoft.us", "dod-graph.microsoft.us", "graph.microsoft.de", "microsoftgraph.chinacloudapi.cn"]);

/**
 * Checks if the url is one of the service root endpoints for Microsoft Graph and Graph Explorer.
 * @param {string} url - The url to be verified
 * @returns {boolean} - Returns true if the url is a Graph URL
 */
export const isGraphURL = (url: string): boolean => {
	// Valid Graph URL pattern - https://graph.microsoft.com/{version}/{resource}?{query-parameters}
	// Valid Graph URL example - https://graph.microsoft.com/v1.0/
	url = url.toLowerCase();

	if (url.indexOf("https://") !== -1) {
		url = url.replace("https://", "");

		// Find where the host ends
		const startofPortNoPos = url.indexOf(":");
		const endOfHostStrPos = url.indexOf("/");
		let hostName = "";
		if (endOfHostStrPos !== -1) {
			if (startofPortNoPos !== -1 && startofPortNoPos < endOfHostStrPos) {
				hostName = url.substring(0, startofPortNoPos);
				return graphURLs.has(hostName);
			}
			// Parse out the host
			hostName = url.substring(0, endOfHostStrPos);
			return graphURLs.has(hostName);
		}
	}

	return false;
};
