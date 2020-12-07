import { FetchOptions } from "./IFetchOptions";
import { MiddlewareControl } from "./middleware/MiddlewareControl";

/**
 * @interface
 * @property {RequestInfo} request - The request url string or the Request instance
 * @property {FetchOptions} [options] - The options for the request
 * @property {Response} [response] - The response content
 * @property {MiddlewareControl} [middlewareControl] - The options for the middleware chain
 */

export interface TestInclusion {
	request: RequestInfo;
	options?: FetchOptions;
	response?: Response;
	middlewareControl?: MiddlewareControl;
}
