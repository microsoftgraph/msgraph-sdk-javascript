/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import * as tslib_1 from "tslib";
/**
 * @class
 * Class for PageIterator
 */
export class PageIterator {
	/**
	 * @public
	 * @constructor
	 * Creates new instance for PageIterator
	 * @param {Client} client - The graph client instance
	 * @param {PageCollection} pageCollection - The page collection object
	 * @param {PageIteratorCallback} callBack - The callback function
	 * @param {GraphRequestOptions} requestOptions - The request options
	 * @returns An instance of a PageIterator
	 */
	constructor(client, pageCollection, callback, requestOptions) {
		this.client = client;
		this.collection = pageCollection.value;
		this.nextLink = pageCollection["@odata.nextLink"];
		this.deltaLink = pageCollection["@odata.deltaLink"];
		this.callback = callback;
		this.complete = false;
		this.requestOptions = requestOptions;
	}
	/**
	 * @private
	 * Iterates over a collection by enqueuing entries one by one and kicking the callback with the enqueued entry
	 * @returns A boolean indicating the continue flag to process next page
	 */
	iterationHelper() {
		if (this.collection === undefined) {
			return false;
		}
		let advance = true;
		while (advance && this.collection.length !== 0) {
			const item = this.collection.shift();
			advance = this.callback(item);
		}
		return advance;
	}
	/**
	 * @private
	 * @async
	 * Helper to make a get request to fetch next page with nextLink url and update the page iterator instance with the returned response
	 * @returns A promise that resolves to a response data with next page collection
	 */
	fetchAndUpdateNextPageData() {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				let graphRequest = this.client.api(this.nextLink);
				if (this.requestOptions) {
					if (this.requestOptions.headers) {
						graphRequest = graphRequest.headers(this.requestOptions.headers);
					}
					if (this.requestOptions.middlewareOptions) {
						graphRequest = graphRequest.middlewareOptions(this.requestOptions.middlewareOptions);
					}
					if (this.requestOptions.options) {
						graphRequest = graphRequest.options(this.requestOptions.options);
					}
				}
				const response = yield graphRequest.get();
				this.collection = response.value;
				this.nextLink = response["@odata.nextLink"];
				this.deltaLink = response["@odata.deltaLink"];
			} catch (error) {
				throw error;
			}
		});
	}
	/**
	 * @public
	 * Getter to get the deltaLink in the current response
	 * @returns A deltaLink which is being used to make delta requests in future
	 */
	getDeltaLink() {
		return this.deltaLink;
	}
	/**
	 * @public
	 * @async
	 * Iterates over the collection and kicks callback for each item on iteration. Fetches next set of data through nextLink and iterates over again
	 * This happens until the nextLink is drained out or the user responds with a red flag to continue from callback
	 * @returns A Promise that resolves to nothing on completion and throws error incase of any discrepancy.
	 */
	iterate() {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				let advance = this.iterationHelper();
				while (advance) {
					if (this.nextLink !== undefined) {
						yield this.fetchAndUpdateNextPageData();
						advance = this.iterationHelper();
					} else {
						advance = false;
					}
				}
				if (this.nextLink === undefined && this.collection.length === 0) {
					this.complete = true;
				}
			} catch (error) {
				throw error;
			}
		});
	}
	/**
	 * @public
	 * @async
	 * To resume the iteration
	 * Note: This internally calls the iterate method, It's just for more readability.
	 * @returns A Promise that resolves to nothing on completion and throws error incase of any discrepancy
	 */
	resume() {
		return tslib_1.__awaiter(this, void 0, void 0, function*() {
			try {
				return this.iterate();
			} catch (error) {
				throw error;
			}
		});
	}
	/**
	 * @public
	 * To get the completeness status of the iterator
	 * @returns Boolean indicating the completeness
	 */
	isComplete() {
		return this.complete;
	}
}
//# sourceMappingURL=PageIterator.js.map
