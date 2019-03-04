/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { RedirectHandlerOptions } from "../../src/middleware/options/RedirectHandlerOptions";

describe("RedirectHandlerOptions.ts", () => {
	describe("constructor", () => {
		it("Should initialize the instance with given options", () => {
			const shouldRedirect = (response: Response) => {
				if (response.status === 301) {
					return true;
				}
				return false;
			};
			const maxRedirects = 5;
			const options = new RedirectHandlerOptions(maxRedirects, shouldRedirect);
			assert.equal(options.maxRedirects, maxRedirects);
			assert.equal(options.shouldRedirect, shouldRedirect);
		});

		it("Should throw error for setting max redirects more than allowed", () => {
			try {
				const options = new RedirectHandlerOptions(100);
				throw new Error("Something wrong with the max redirects value redirection");
			} catch (error) {
				assert.equal(error.name, "MaxLimitExceeded");
			}
		});

		/* tslint:disable: no-string-literal */
		it("Should initialize instance with default options", () => {
			const options = new RedirectHandlerOptions();
			assert.equal(options.maxRedirects, RedirectHandlerOptions["DEFAULT_MAX_REDIRECTS"]);
			assert.equal(options.shouldRedirect, RedirectHandlerOptions["DEFAULT_SHOULD_RETRY"]);
		});
		/* tslint:enable: no-string-literal */
	});
});
