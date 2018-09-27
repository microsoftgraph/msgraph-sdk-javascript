/**
 * @module PageIterator
 */
import { Client } from "../index";
/**
 * Signature representing PageCollection
 * @property {any[]} value - The collection value
 * @property {string} [@odata.nextLink] - The nextLine value
 * @property {any} Additional - Any number of additional properties (This is to accept the any additional data returned by in the response to the nextLink request)
 */
export interface PageCollection {
    value: any[];
    "@odata.nextLink"?: string;
    "@odata.deltaLink"?: string;
    [Key: string]: any;
}
/**
 * Signature representing callback for page iterator
 * @property {Function} callback - The callback function which should return boolean to continue the continue/stop the iteration.
 */
export interface PageIteratorCallback {
    (any: any): boolean;
}
/**
 * Class for PageIterator
 */
export declare class PageIterator {
    /**
     * @private
     * Member holding the GraphClient instance
     */
    private client;
    /**
     * @private
     * Member holding the page collection
     */
    private collection;
    /**
     * @private
     * Member variable referring to nextLink of the page collection
     */
    private nextLink;
    /**
     * @private
     * Member variable referring to deltaLink of the request
     */
    private deltaLink;
    /**
     * @private
     * Holding callback for Iteration.
     */
    private callback;
    /**
     * Creates new instance for PageIterator
     * @param {Client} client - The graph client instance
     * @param {PageCollection} pageCollection - The page collection object
     * @param {PageIteratorCallback} callBack - The callback function
     */
    constructor(client: Client, pageCollection: PageCollection, callback: PageIteratorCallback);
    /**
     * @private
     * Iterates over a collection by enqueuing entries one by one and kicking the callback with the enqueued entry
     * @return A boolean indicating the continue flag to process next page
     */
    private iterationHelper;
    /**
     * @private
     * @async
     * Helper to make a get request to fetch next page with nextLink url and update the page iterator instance with the returned response
     * @return A promise that resolves to a response data with next page collection
     */
    private fetchAndUpdateNextPageData;
    /**
     * Getter to get the deltaLink in the current response
     * @return A deltaLink which is being used to make delta requests in future
     */
    getDeltaLink(): string | undefined;
    /**
     * @async
     * Iterates over the collection and kicks callback for each item on iteration. Fetches next set of data through nextLink and iterates over again
     * This happens until the nextLink is drained out or the user responds with a red flag to continue from callback
     * @return A Promise that resolves to nothing on completion and throws error incase of any discrepancy.
     */
    iterate(): Promise<any>;
    /**
     * @async
     * This internally calls the iterate method, It's just for more readability.
     * @return A Promise that resolves to nothing on completion and throws error incase of any discrepancy
     */
    resume(): Promise<any>;
}
