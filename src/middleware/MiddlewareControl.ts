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
export class MiddlewareControl {
	/**
	 * @private
	 * A member holding map of MiddlewareOptions
	 */
	private middlewareOptions: Map<string, MiddlewareOptions>;

	/**
	 * @public
	 * @constructor
	 * Creates an instance of MiddlewareControl
	 * @param {MiddlewareOptions[]} [middlewareOptions = []] - The array of middlewareOptions
	 * @returns The instance of MiddlewareControl
	 */
	public constructor(middlewareOptions: MiddlewareOptions[] = []) {
		this.middlewareOptions = new Map<string, MiddlewareOptions>();
		for (const option of middlewareOptions) {
			const name = option.constructor.name;
			this.middlewareOptions.set(name, option);
		}
	}

	/**
	 * @public
	 * To get the middleware option using the class name of the option
	 * @param {string} name - The class name of the strongly types option class
	 * @returns The middleware option
	 */
	public getMiddlewareOptions(name: string): MiddlewareOptions {
		return this.middlewareOptions.get(name);
	}

	public setMiddlewareOptions(name: string, option: MiddlewareOptions): void {
		this.middlewareOptions.set(name, option);
	}
}
