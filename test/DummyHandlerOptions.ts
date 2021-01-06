/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module DummyHandlerOptions
 */

import { MiddlewareOptions } from "../src/middleware/options/IMiddlewareOptions";

/**
 * @class
 * @implements MiddlewareOptions
 * Class for DummyHandlerOptions
 */

export class DummyHandlerOptions implements MiddlewareOptions {
	/**
	 * @public
	 * A member holding a dummy string
	 */
	public dummyString: string;

	/**
	 * @public
	 * @async
	 * To create an instance of DummyHandlerOptions
	 * @param {string} dummyString - The dummy string
	 * @returns An instance of DummyHandlerOptions
	 */
	public constructor(dummyString: string = "dummy") {
		this.dummyString = dummyString;
	}
}
