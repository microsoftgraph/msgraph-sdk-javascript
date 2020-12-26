/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { assert } from "chai";
import { serializeContent, urlJoin } from "../../../src/GraphRequestUtil";
describe("GraphRequestUtil.ts", () => {
	describe("urlJoin", () => {
		const output = "host/version/path";
		it("Should append parts with /", () => {
			const joined = urlJoin(["host", "version", "path"]);
			assert.equal(joined, output);
		});
		it("Should append parts with / by removing / from start", () => {
			const joined = urlJoin(["host", "/version", "/path"]);
			assert.equal(joined, output);
		});
		it("Should append parts with / by removing / from end", () => {
			const joined = urlJoin(["host/", "version/", "path"]);
			assert.equal(joined, output);
		});
		it("Should append parts with / by removing / from start and end", () => {
			const joined = urlJoin(["host/", "/version/", "/path"]);
			assert.equal(joined, output);
		});
	});
	describe("serializeContent", () => {
		it("Should return Buffer/Blob/File/FormData/String as it is", () => {
			const str = "Content";
			assert.equal(serializeContent(str), str);
			const buffer = new Buffer("Buffer");
			assert.equal(serializeContent(buffer), buffer);
		});
		it("Should convert it to string", () => {
			const data = 123;
			const str = "123";
			assert.equal(serializeContent(data), str);
		});
		it("Should throw error for objects that cannot be converted to string", () => {
			const node1 = {
				data: 1,
				link: undefined,
			};
			const node2 = {
				data: 2,
				link: undefined,
			};
			node1.link = node2;
			node2.link = node1;
			try {
				serializeContent(node1);
				throw new Error("Something wrong with the serialize content, it should not stringify cyclic referenced objects");
			} catch (error) {
				assert.equal(error.message, "Unable to stringify the content");
			}
		});
		it("Should return undefined for the case of undefined content value", () => {
			const val = undefined;
			assert.equal(serializeContent(val), undefined);
		});
		it("Should return 'null' for the case of null content value", () => {
			const val = null;
			assert.equal(serializeContent(val), "null");
		});
	});
});
//# sourceMappingURL=GraphRequestUtil.js.map
