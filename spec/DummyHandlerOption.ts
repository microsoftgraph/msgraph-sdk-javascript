/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module DummyHandlerOption
 */

import { MiddlewareOption } from "../src/middleware/option/IMiddlewareOption";

/**
 * @class
 * @implements MiddlewareOption
 * Class for DummyHandlerOption
 */

export class DummyHandlerOption implements MiddlewareOption {
	/**
	 * @public
	 * A member holding a dummy string
	 */
	public dummyString: string;

	/**
	 * @public
	 * @async
	 * To create an instance of DummyHandlerOption
	 * @param {string} dummyString - The dummy string
	 * @returns An instance of DummyHandlerOption
	 */
	public constructor(dummyString: string = "dummy") {
		this.dummyString = dummyString;
	}
}
