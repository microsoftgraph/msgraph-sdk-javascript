"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var GraphRequestUtil_1 = require("../../src/GraphRequestUtil");
describe("GraphRequestUtil.ts", function () {
    describe("urlJoin", function () {
        var output = "host/version/path";
        it("Should append parts with /", function () {
            var joined = GraphRequestUtil_1.urlJoin(["host", "version", "path"]);
            chai_1.assert.equal(joined, output);
        });
        it("Should append parts with / by removing / from start", function () {
            var joined = GraphRequestUtil_1.urlJoin(["host", "/version", "/path"]);
            chai_1.assert.equal(joined, output);
        });
        it("Should append parts with / by removing / from end", function () {
            var joined = GraphRequestUtil_1.urlJoin(["host/", "version/", "path"]);
            chai_1.assert.equal(joined, output);
        });
        it("Should append parts with / by removing / from start and end", function () {
            var joined = GraphRequestUtil_1.urlJoin(["host/", "/version/", "/path"]);
            chai_1.assert.equal(joined, output);
        });
    });
    describe("serializeContent", function () {
        it("Should return Buffer/Blob/File/FormData/String as it is", function () {
            var str = "Content";
            chai_1.assert.equal(GraphRequestUtil_1.serializeContent(str), str);
            var buffer = new Buffer("Buffer");
            chai_1.assert.equal(GraphRequestUtil_1.serializeContent(buffer), buffer);
        });
        it("Should convert it to string", function () {
            var data = 123, str = "123";
            chai_1.assert.equal(GraphRequestUtil_1.serializeContent(data), str);
        });
        it("Should throw error for objects that cannot be converted to string", function () {
            var node1 = {
                data: 1,
                link: undefined
            };
            var node2 = {
                data: 2,
                link: undefined
            };
            node1.link = node2;
            node2.link = node1;
            try {
                GraphRequestUtil_1.serializeContent(node1);
                throw new Error("Something wrong with the serialize content, it should stringify cyclic referenced objects");
            }
            catch (error) {
                chai_1.assert.equal(error.message, "Unable to stringify the content");
            }
        });
    });
});
//# sourceMappingURL=GraphRequestUtil.js.map