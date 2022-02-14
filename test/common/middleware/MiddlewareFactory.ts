/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { HTTPMessageHandler, RedirectHandler, RetryHandler, TelemetryHandler } from "../../../src";
import { MiddlewareFactory } from "../../../src/middleware/MiddlewareFactory";

describe("MiddlewareFactory", () => {
	it("Should return the default pipeline", () => {
		const defaultMiddleWareArray = MiddlewareFactory.getDefaultMiddlewareChain();
		assert.isTrue(defaultMiddleWareArray[0] instanceof RetryHandler);
		assert.isTrue(defaultMiddleWareArray[1] instanceof RedirectHandler);
		assert.isTrue(defaultMiddleWareArray[2] instanceof TelemetryHandler);
		assert.isTrue(defaultMiddleWareArray[3] instanceof HTTPMessageHandler);
	});
});
