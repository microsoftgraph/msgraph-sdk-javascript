/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module BatchRequestContent
 */
import { RequestMethod } from "../RequestMethod";

/**
 * @interface
 * Signature to represent the buffer request body parsing method
 * @property {Function} buffer - Returns a promise that resolves to a buffer of the request body
 */
interface NodeBody {
	buffer(): Promise<Buffer>;
}

/**
 * @interface
 * Signature to represent the Request for both Node and browser environments
 * @extends Request
 * @extends NodeBody
 */
interface IsomorphicRequest extends Request, NodeBody {}

/**
 * @interface
 * Signature representing BatchRequestStep data
 * @property {string} id - Unique identity for the request, Should not be an empty string
 * @property {string[]} [dependsOn] - Array of dependencies
 * @property {Request} request - The Request object
 */
export interface BatchRequestStep {
	id: string;
	dependsOn?: string[];
	request: Request;
}

/**
 * @interface
 * Signature representing single request in a Batching
 * @extends RequestInit
 * @see {@link https://github.com/Microsoft/TypeScript/blob/master/lib/lib.dom.d.ts#L1337} and {@link https://fetch.spec.whatwg.org/#requestinit}
 *
 * @property {string} url - The url value of the request
 */

export interface RequestData extends RequestInit {
	url: string;
}

/**
 * @interface
 * Signature representing batch request data
 * @property {string} id - Unique identity for the request, Should not be an empty string
 * @property {string[]} [dependsOn] - Array of dependencies
 */
export interface BatchRequestData extends RequestData {
	id: string;
	dependsOn?: string[];
}

/**
 * @interface
 * Signature representing batch request body
 * @property {BatchRequestData[]} requests - Array of request data, a json representation of requests for batch
 */

export interface BatchRequestBody {
	requests: BatchRequestData[];
}

/**
 * @class
 * Class for handling BatchRequestContent
 */
export class BatchRequestContent {
	/**
	 * @private
	 * @static
	 * Limit for number of requests {@link - https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
	 */
	private static requestLimit = 20;

	/**
	 * @public
	 * To keep track of requests, key will be id of the request and value will be the request json
	 */
	public requests: Map<string, BatchRequestStep>;

	/**
	 * @private
	 * @static
	 * Validates the dependency chain of the requests
	 *
	 * Note:
	 * Individual requests can depend on other individual requests. Currently, requests can only depend on a single other request, and must follow one of these three patterns:
	 * 1. Parallel - no individual request states a dependency in the dependsOn property.
	 * 2. Serial - all individual requests depend on the previous individual request.
	 * 3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.
	 * As JSON batching matures, these limitations will be removed.
	 * @see {@link https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching}
	 *
	 * @param {Map<string, BatchRequestStep>} requests - The map of requests.
	 * @returns The boolean indicating the validation status
	 */

	private static validateDependencies(requests: Map<string, BatchRequestStep>): boolean {
		const isParallel = (reqs: Map<string, BatchRequestStep>): boolean => {
			const iterator = reqs.entries();
			let cur = iterator.next();
			while (!cur.done) {
				const curReq = cur.value[1];
				if (curReq.dependsOn !== undefined && curReq.dependsOn.length > 0) {
					return false;
				}
				cur = iterator.next();
			}
			return true;
		};
		const isSerial = (reqs: Map<string, BatchRequestStep>): boolean => {
			const iterator = reqs.entries();
			let cur = iterator.next();
			const firstRequest: BatchRequestStep = cur.value[1];
			if (firstRequest.dependsOn !== undefined && firstRequest.dependsOn.length > 0) {
				return false;
			}
			let prev = cur;
			cur = iterator.next();
			while (!cur.done) {
				const curReq: BatchRequestStep = cur.value[1];
				if (curReq.dependsOn === undefined || curReq.dependsOn.length !== 1 || curReq.dependsOn[0] !== prev.value[1].id) {
					return false;
				}
				prev = cur;
				cur = iterator.next();
			}
			return true;
		};
		const isSame = (reqs: Map<string, BatchRequestStep>): boolean => {
			const iterator = reqs.entries();
			let cur = iterator.next();
			const firstRequest: BatchRequestStep = cur.value[1];
			let dependencyId: string;
			if (firstRequest.dependsOn === undefined || firstRequest.dependsOn.length === 0) {
				dependencyId = firstRequest.id;
			} else {
				if (firstRequest.dependsOn.length === 1) {
					const fDependencyId = firstRequest.dependsOn[0];
					if (fDependencyId !== firstRequest.id && reqs.has(fDependencyId)) {
						dependencyId = fDependencyId;
					} else {
						return false;
					}
				} else {
					return false;
				}
			}
			cur = iterator.next();
			while (!cur.done) {
				const curReq = cur.value[1];
				if ((curReq.dependsOn === undefined || curReq.dependsOn.length === 0) && dependencyId !== curReq.id) {
					return false;
				}
				if (curReq.dependsOn !== undefined && curReq.dependsOn.length !== 0) {
					if (curReq.dependsOn.length === 1 && (curReq.id === dependencyId || curReq.dependsOn[0] !== dependencyId)) {
						return false;
					}
					if (curReq.dependsOn.length > 1) {
						return false;
					}
				}
				cur = iterator.next();
			}
			return true;
		};
		if (requests.size === 0) {
			const error = new Error("Empty requests map, Please provide at least one request.");
			error.name = "Empty Requests Error";
			throw error;
		}
		return isParallel(requests) || isSerial(requests) || isSame(requests);
	}

	/**
	 * @private
	 * @static
	 * @async
	 * Converts Request Object instance to a JSON
	 * @param {IsomorphicRequest} request - The IsomorphicRequest Object instance
	 * @returns A promise that resolves to JSON representation of a request
	 */
	private static async getRequestData(request: IsomorphicRequest): Promise<RequestData> {
		const requestData: RequestData = {
			url: "",
		};
		const hasHttpRegex = new RegExp("^https?://");
		// Stripping off hostname, port and url scheme
		requestData.url = hasHttpRegex.test(request.url) ? "/" + request.url.split(/.*?\/\/.*?\//)[1] : request.url;
		requestData.method = request.method;
		const headers = {};
		request.headers.forEach((value, key) => {
			headers[key] = value;
		});
		if (Object.keys(headers).length) {
			requestData.headers = headers;
		}
		if (request.method === RequestMethod.PATCH || request.method === RequestMethod.POST || request.method === RequestMethod.PUT) {
			requestData.body = await BatchRequestContent.getRequestBody(request);
		}
		/**
		 * TODO: Check any other property needs to be used from the Request object and add them
		 */
		return requestData;
	}

	/**
	 * @private
	 * @static
	 * @async
	 * Gets the body of a Request object instance
	 * @param {IsomorphicRequest} request - The IsomorphicRequest object instance
	 * @returns The Promise that resolves to a body value of a Request
	 */
	private static async getRequestBody(request: IsomorphicRequest): Promise<any> {
		let bodyParsed = false;
		let body;
		try {
			const cloneReq = request.clone();
			body = await cloneReq.json();
			bodyParsed = true;
		} catch (e) {
			//TODO- Handle empty catches
		}
		if (!bodyParsed) {
			try {
				if (typeof Blob !== "undefined") {
					const blob = await request.blob();
					const reader = new FileReader();
					body = await new Promise((resolve) => {
						reader.addEventListener(
							"load",
							() => {
								const dataURL = reader.result as string;
								/**
								 * Some valid dataURL schemes:
								 *  1. data:text/vnd-example+xyz;foo=bar;base64,R0lGODdh
								 *  2. data:text/plain;charset=UTF-8;page=21,the%20data:1234,5678
								 *  3. data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==
								 *  4. data:image/png,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==
								 *  5. data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==
								 * @see Syntax {@link https://en.wikipedia.org/wiki/Data_URI_scheme} for more
								 */
								const regex = new RegExp("^s*data:(.+?/.+?(;.+?=.+?)*)?(;base64)?,(.*)s*$");
								const segments = regex.exec(dataURL);
								resolve(segments[4]);
							},
							false,
						);
						reader.readAsDataURL(blob);
					});
				} else if (typeof Buffer !== "undefined") {
					const buffer = await request.buffer();
					body = buffer.toString("base64");
				}
				bodyParsed = true;
			} catch (e) {
				// TODO-Handle empty catches
			}
		}
		return body;
	}

	/**
	 * @public
	 * @constructor
	 * Constructs a BatchRequestContent instance
	 * @param {BatchRequestStep[]} [requests] - Array of requests value
	 * @returns An instance of a BatchRequestContent
	 */
	public constructor(requests?: BatchRequestStep[]) {
		this.requests = new Map();
		if (typeof requests !== "undefined") {
			const limit = BatchRequestContent.requestLimit;
			if (requests.length > limit) {
				const error = new Error(`Maximum requests limit exceeded, Max allowed number of requests are ${limit}`);
				error.name = "Limit Exceeded Error";
				throw error;
			}
			for (const req of requests) {
				this.addRequest(req);
			}
		}
	}

	/**
	 * @public
	 * Adds a request to the batch request content
	 * @param {BatchRequestStep} request - The request value
	 * @returns The id of the added request
	 */
	public addRequest(request: BatchRequestStep): string {
		const limit = BatchRequestContent.requestLimit;
		if (request.id === "") {
			const error = new Error(`Id for a request is empty, Please provide an unique id`);
			error.name = "Empty Id For Request";
			throw error;
		}
		if (this.requests.size === limit) {
			const error = new Error(`Maximum requests limit exceeded, Max allowed number of requests are ${limit}`);
			error.name = "Limit Exceeded Error";
			throw error;
		}
		if (this.requests.has(request.id)) {
			const error = new Error(`Adding request with duplicate id ${request.id}, Make the id of the requests unique`);
			error.name = "Duplicate RequestId Error";
			throw error;
		}
		this.requests.set(request.id, request);
		return request.id;
	}

	/**
	 * @public
	 * Removes request from the batch payload and its dependencies from all dependents
	 * @param {string} requestId - The id of a request that needs to be removed
	 * @returns The boolean indicating removed status
	 */
	public removeRequest(requestId: string): boolean {
		const deleteStatus = this.requests.delete(requestId);
		const iterator = this.requests.entries();
		let cur = iterator.next();
		/**
		 * Removing dependencies where this request is present as a dependency
		 */
		while (!cur.done) {
			const dependencies = cur.value[1].dependsOn;
			if (typeof dependencies !== "undefined") {
				const index = dependencies.indexOf(requestId);
				if (index !== -1) {
					dependencies.splice(index, 1);
				}
				if (dependencies.length === 0) {
					delete cur.value[1].dependsOn;
				}
			}
			cur = iterator.next();
		}
		return deleteStatus;
	}

	/**
	 * @public
	 * @async
	 * Serialize content from BatchRequestContent instance
	 * @returns The body content to make batch request
	 */
	public async getContent(): Promise<BatchRequestBody> {
		const requests: BatchRequestData[] = [];
		const requestBody: BatchRequestBody = {
			requests,
		};
		const iterator = this.requests.entries();
		let cur = iterator.next();
		if (cur.done) {
			const error = new Error("No requests added yet, Please add at least one request.");
			error.name = "Empty Payload";
			throw error;
		}
		if (!BatchRequestContent.validateDependencies(this.requests)) {
			const error = new Error(`Invalid dependency found, Dependency should be:
1. Parallel - no individual request states a dependency in the dependsOn property.
2. Serial - all individual requests depend on the previous individual request.
3. Same - all individual requests that state a dependency in the dependsOn property, state the same dependency.`);
			error.name = "Invalid Dependency";
			throw error;
		}
		while (!cur.done) {
			const requestStep: BatchRequestStep = cur.value[1];
			const batchRequestData: BatchRequestData = (await BatchRequestContent.getRequestData(requestStep.request as IsomorphicRequest)) as BatchRequestData;
			/**
			 * @see{@https://tools.ietf.org/html/rfc7578#section-4.4}
			 * TODO- Setting/Defaulting of content-type header to the correct value
			 * @see {@link https://developer.microsoft.com/en-us/graph/docs/concepts/json_batching#request-format}
			 */
			if (batchRequestData.body !== undefined && (batchRequestData.headers === undefined || batchRequestData.headers["content-type"] === undefined)) {
				const error = new Error(`Content-type header is not mentioned for request #${requestStep.id}, For request having body, Content-type header should be mentioned`);
				error.name = "Invalid Content-type header";
				throw error;
			}
			batchRequestData.id = requestStep.id;
			if (requestStep.dependsOn !== undefined && requestStep.dependsOn.length > 0) {
				batchRequestData.dependsOn = requestStep.dependsOn;
			}
			requests.push(batchRequestData);
			cur = iterator.next();
		}
		requestBody.requests = requests;
		return requestBody;
	}

	/**
	 * @public
	 * Adds a dependency for a given dependent request
	 * @param {string} dependentId - The id of the dependent request
	 * @param {string} [dependencyId] - The id of the dependency request, if not specified the preceding request will be considered as a dependency
	 * @returns Nothing
	 */
	public addDependency(dependentId: string, dependencyId?: string): void {
		if (!this.requests.has(dependentId)) {
			const error = new Error(`Dependent ${dependentId} does not exists, Please check the id`);
			error.name = "Invalid Dependent";
			throw error;
		}
		if (typeof dependencyId !== "undefined" && !this.requests.has(dependencyId)) {
			const error = new Error(`Dependency ${dependencyId} does not exists, Please check the id`);
			error.name = "Invalid Dependency";
			throw error;
		}
		if (typeof dependencyId !== "undefined") {
			const dependent = this.requests.get(dependentId);
			if (dependent.dependsOn === undefined) {
				dependent.dependsOn = [];
			}
			if (dependent.dependsOn.indexOf(dependencyId) !== -1) {
				const error = new Error(`Dependency ${dependencyId} is already added for the request ${dependentId}`);
				error.name = "Duplicate Dependency";
				throw error;
			}
			dependent.dependsOn.push(dependencyId);
		} else {
			const iterator = this.requests.entries();
			let prev;
			let cur = iterator.next();
			while (!cur.done && cur.value[1].id !== dependentId) {
				prev = cur;
				cur = iterator.next();
			}
			if (typeof prev !== "undefined") {
				const dId = prev.value[0];
				if (cur.value[1].dependsOn === undefined) {
					cur.value[1].dependsOn = [];
				}
				if (cur.value[1].dependsOn.indexOf(dId) !== -1) {
					const error = new Error(`Dependency ${dId} is already added for the request ${dependentId}`);
					error.name = "Duplicate Dependency";
					throw error;
				}
				cur.value[1].dependsOn.push(dId);
			} else {
				const error = new Error(`Can't add dependency ${dependencyId}, There is only a dependent request in the batch`);
				error.name = "Invalid Dependency Addition";
				throw error;
			}
		}
	}

	/**
	 * @public
	 * Removes a dependency for a given dependent request id
	 * @param {string} dependentId - The id of the dependent request
	 * @param {string} [dependencyId] - The id of the dependency request, if not specified will remove all the dependencies of that request
	 * @returns The boolean indicating removed status
	 */
	public removeDependency(dependentId: string, dependencyId?: string): boolean {
		const request = this.requests.get(dependentId);
		if (typeof request === "undefined" || request.dependsOn === undefined || request.dependsOn.length === 0) {
			return false;
		}
		if (typeof dependencyId !== "undefined") {
			const index = request.dependsOn.indexOf(dependencyId);
			if (index === -1) {
				return false;
			}
			request.dependsOn.splice(index, 1);
			return true;
		} else {
			delete request.dependsOn;
			return true;
		}
	}
}
