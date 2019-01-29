/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import { urlJoin, serializeContent } from "../../src/GraphRequestUtil";

describe("GraphRequestUtil.ts", function () {
    describe("urlJoin", function () {
        let output = "host/version/path";

        it("Should append parts with /", () => {
            let joined = urlJoin(["host", "version", "path"]);
            assert.equal(joined, output);
        });

        it("Should append parts with / by removing / from start", () => {
            let joined = urlJoin(["host", "/version", "/path"]);
            assert.equal(joined, output);
        });

        it("Should append parts with / by removing / from end", () => {
            let joined = urlJoin(["host/", "version/", "path"]);
            assert.equal(joined, output);
        });

        it("Should append parts with / by removing / from start and end", () => {
            let joined = urlJoin(["host/", "/version/", "/path"]);
            assert.equal(joined, output);
        });
    });

    describe("serializeContent", function () {
        it("Should return Buffer/Blob/File/FormData/String as it is", () => {
            let str = "Content";
            assert.equal(serializeContent(str), str);
            let buffer = new Buffer("Buffer");
            assert.equal(serializeContent(buffer), buffer);
        });

        it("Should convert it to string", () => {
            let data = 123,
                str = "123";
            assert.equal(serializeContent(data), str);
        });

        it("Should throw error for objects that cannot be converted to string", () => {
            let node1 = {
                data: 1,
                link: undefined
            };
            let node2 = {
                data: 2,
                link: undefined
            };
            node1.link = node2;
            node2.link = node1;
            try {
                serializeContent(node1);
                throw new Error("Something wrong with the serialize content, it should stringify cyclic referenced objects");
            } catch (error) {
                assert.equal(error.message, "Unable to stringify the content");
            }
        });
    });
});