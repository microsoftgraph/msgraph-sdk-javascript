/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module MiddlewareControl
 */
import { MiddlewareOptions } from "./options/IMiddlewareOptions";
/**
 * @class
 * Class representing MiddlewareControl
 */
export declare class MiddlewareControl {
	/**
	 * @private
	 * A member holding map of MiddlewareOptions
	 */
	private middlewareOptions;
	/**
	 * @public
	 * @constructor
	 * Creates an instance of MiddlewareControl
	 * @param {MiddlewareOptions[]} [middlewareOptions = []] - The array of middlewareOptions
	 * @returns The instance of MiddlewareControl
	 */
	constructor(middlewareOptions?: MiddlewareOptions[]);
	/**
	 * @public
	 * To get the middleware option using the class of the option
	 * @param {Function} fn - The class of the strongly typed option class
	 * @returns The middleware option
	 * @example
	 * // if you wanted to return the middleware option associated with this class (MiddlewareControl)
	 * // call this function like this:
	 * getMiddlewareOptions(MiddlewareControl)
	 */
	getMiddlewareOptions(fn: Function): MiddlewareOptions;
	/**
	 * @public
	 * To set the middleware options using the class of the option
	 * @param {Function} fn - The class of the strongly typed option class
	 * @param {MiddlewareOptions} option - The strongly typed middleware option
	 * @returns nothing
	 */
	setMiddlewareOptions(fn: Function, option: MiddlewareOptions): void;
}
