/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";

import { serializeContent, urlJoin, isGraphURL, isCustomHost } from "../../../src/GraphRequestUtil";

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
			const buffer = Buffer.alloc(2, "Buffer");
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
				throw new Error("Test Failed - Something wrong with the serialize content, it should not stringify cyclic referenced objects");
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

	describe("isGraphURL - host confusion regression", () => {
		it("Should accept valid Graph URLs", () => {
			assert.isTrue(isGraphURL("https://graph.microsoft.com/v1.0/me"));
			assert.isTrue(isGraphURL("https://graph.microsoft.com:443/v1.0/me"));
			assert.isTrue(isGraphURL("https://graph.microsoft.us/v1.0/me"));
			assert.isTrue(isGraphURL("https://dod-graph.microsoft.us/v1.0/me"));
			assert.isTrue(isGraphURL("https://graph.microsoft.de/v1.0/me"));
			assert.isTrue(isGraphURL("https://microsoftgraph.chinacloudapi.cn/v1.0/me"));
			assert.isTrue(isGraphURL("https://canary.graph.microsoft.com/v1.0/me"));
		});

		it("Should reject URLs with userinfo (host confusion attack)", () => {
			assert.isFalse(isGraphURL("https://graph.microsoft.com:443@attacker.example/v1.0/me"));
			assert.isFalse(isGraphURL("https://graph.microsoft.com:8080@attacker.example/v1.0/me"));
			assert.isFalse(isGraphURL("https://graph.microsoft.com@attacker.example/v1.0/me"));
			assert.isFalse(isGraphURL("https://user:pass@graph.microsoft.com/v1.0/me"));
		});

		it("Should reject non-Graph hosts", () => {
			assert.isFalse(isGraphURL("https://attacker.example/v1.0/me"));
			assert.isFalse(isGraphURL("https://graph.microsoft.com.evil.example/v1.0/me"));
		});

		it("Should reject non-HTTPS URLs", () => {
			assert.isFalse(isGraphURL("http://graph.microsoft.com/v1.0/me"));
		});

		it("Should reject malformed URLs", () => {
			assert.isFalse(isGraphURL("not-a-url"));
			assert.isFalse(isGraphURL(""));
		});
	});

	describe("isCustomHost - host confusion regression", () => {
		const customHosts = new Set<string>(["api.example.com"]);

		it("Should accept valid custom host URLs", () => {
			assert.isTrue(isCustomHost("https://api.example.com/v1.0/data", customHosts));
		});

		it("Should reject URLs with userinfo targeting custom hosts", () => {
			assert.isFalse(isCustomHost("https://api.example.com:443@attacker.example/v1.0/data", customHosts));
		});
	});
});
