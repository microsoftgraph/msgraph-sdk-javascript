/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { RequestOption } from "@microsoft/kiota-abstractions";

/**
 * @module DummyHandlerOptions
 */

/**
 * @class
 * @implements MiddlewareOptions
 * Class for DummyHandlerOptions
 */

export class DummyHandlerOptions implements RequestOption {
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
	public constructor(dummyString = "dummy") {
		this.dummyString = dummyString;
	}

	public getKey(): string {
		return "DummyHandlerOptions";
	}
}
