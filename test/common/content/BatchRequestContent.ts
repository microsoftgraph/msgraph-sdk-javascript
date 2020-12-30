/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import "isomorphic-fetch";

import { BatchRequestContent, BatchRequestStep } from "../../../src/content/BatchRequestContent";
import { randomString } from "../../test-helper";

const folderName = randomString();
const folderDetails = {
	name: folderName,
	folder: {},
};

const createFolderRequest = new Request("/me/drive/root/children", {
	method: "POST",
	headers: {
		"Content-type": "application/json",
	},
	body: JSON.stringify(folderDetails),
});

const getCreateFolderRequestCopy = () => {
	return {
		id: "1",
		request: createFolderRequest,
	};
};

const getCreateFolderRequestWithDependsOnCopy = () => {
	const data = {
		id: "1",
		request: createFolderRequest,
		dependsOn: undefined,
	};
	data.dependsOn = [];
	return data;
};

describe("BatchRequestContent.ts", () => {
	describe("Create", function() {
		this.timeout(20 * 1000);
		it("Should Create BatchRequestContent instance with no requests", (done) => {
			const batchReq = new BatchRequestContent();
			assert(batchReq instanceof BatchRequestContent);
			done();
		});

		it("Should create BatchRequestContent instance with empty array", (done) => {
			const batchReq = new BatchRequestContent([]);
			assert(batchReq instanceof BatchRequestContent);
			done();
		});

		it("Should create BatchRequestContent instance with requests", (done) => {
			const createFolderDuplicate1 = getCreateFolderRequestCopy();
			const createFolderDuplicate2 = getCreateFolderRequestCopy();
			createFolderDuplicate2.id = "2";
			const batchReq = new BatchRequestContent([createFolderDuplicate1, createFolderDuplicate2]);
			assert.equal(batchReq.requests.size, 2);
			done();
		});

		it("Should throw error for empty request id", (done) => {
			const createFolderDuplicate1 = getCreateFolderRequestCopy();
			createFolderDuplicate1.id = "";
			try {
				const batchReq = new BatchRequestContent([createFolderDuplicate1]);
				throw new Error("Test Failed - Something wrong with the empty id check");
			} catch (error) {
				assert.equal(error.name, "Empty Id For Request");
			}
			done();
		});

		it("Should return error incase of number of requests limit exceeding", (done) => {
			const requests = [];
			for (let i = 0; i < 25; i++) {
				const req = getCreateFolderRequestCopy();
				req.id = "" + i;
				requests.push(req);
			}
			try {
				const batchReq = new BatchRequestContent(requests);
				throw new Error("Test Failed - Something wrong with the limiting requests");
			} catch (error) {
				assert.equal(error.name, "Limit Exceeded Error");
				done();
			}
		});
	});

	describe("addRequest", function() {
		this.timeout(20 * 1000);
		it("Should emit size exceed error", (done) => {
			const requests = [];
			for (let i = 0; i < 20; i++) {
				const r = getCreateFolderRequestCopy();
				r.id = "" + i;
				requests.push(r);
			}
			const req = getCreateFolderRequestCopy();
			req.id = "100";
			const batchReq = new BatchRequestContent(requests);
			try {
				batchReq.addRequest(req);
				throw new Error("Test Failed - Something wrong with the limiting requests");
			} catch (error) {
				assert.equal(error.name, "Limit Exceeded Error");
				done();
			}
		});

		it("Should add Request JSON to the BatchRequestContent instance", (done) => {
			const req = getCreateFolderRequestCopy();
			req.id = "100";
			const batchReq = new BatchRequestContent();
			const id = batchReq.addRequest(req);
			assert.equal(req.id, id);
			done();
		});

		it("Should throw duplicate id error", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			const batchReq = new BatchRequestContent([req1]);
			try {
				batchReq.addRequest(req2);
				throw new Error("Test Failed - Something wrong with duplicate id validation");
			} catch (error) {
				assert.equal(error.name, "Duplicate RequestId Error");
				done();
			}
		});

		it("Should throw duplicate id error", (done) => {
			const req = getCreateFolderRequestCopy();
			req.id = "";
			const batchReq = new BatchRequestContent();
			try {
				batchReq.addRequest(req);
				throw new Error("Test Failed -Something wrong with empty id validation");
			} catch (error) {
				assert.equal(error.name, "Empty Id For Request");
				done();
			}
		});
	});

	describe("removeRequest", () => {
		it("Should delete the request present in the batch", (done) => {
			const req = getCreateFolderRequestCopy();
			const batchReq = new BatchRequestContent([req]);
			assert.equal(true, batchReq.removeRequest(req.id));
			done();
		});

		it("Should return false for the request that is not present in the batch", (done) => {
			const req = getCreateFolderRequestCopy();
			const batchReq = new BatchRequestContent([req]);
			assert.equal(false, batchReq.removeRequest("1000"));
			done();
		});

		it("Should remove dependencies in case dependencies present", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			const req3 = getCreateFolderRequestCopy();
			const req4 = getCreateFolderRequestCopy();
			req1.id = "1";
			req2.id = "2";
			req3.id = "3";
			req4.id = "4";
			const batchReq = new BatchRequestContent([req1, req2, req3, req4]);
			batchReq.addDependency("2", "1");
			batchReq.addDependency("3", "2");
			batchReq.addDependency("4", "1");
			batchReq.addDependency("4", "2");
			batchReq.addDependency("4", "3");
			batchReq.removeRequest("2");

			assert.isUndefined(batchReq.requests.get("1").dependsOn);
			assert.isUndefined(batchReq.requests.get("3").dependsOn);
			assert.equal(batchReq.requests.get("4").dependsOn.length, 2);
			done();
		});
	});

	describe("addDependency", function() {
		this.timeout(20 * 1000);
		it("Should return error for request with dependent id not present", (done) => {
			const req = getCreateFolderRequestCopy();
			const batchReq = new BatchRequestContent([req]);
			try {
				batchReq.addDependency("1");
				throw new Error("Test Failed -Dependent validation is failing");
			} catch (err) {
				assert.equal(err.name, "Invalid Dependency Addition");
				done();
			}
		});

		it("Should return error for the request with given dependency id is not present", (done) => {
			const req = getCreateFolderRequestCopy();
			const batchReq = new BatchRequestContent([req]);
			try {
				batchReq.addDependency("1", "100");
				throw new Error("Test Failed -Dependency validation is failing");
			} catch (err) {
				assert.equal(err.name, "Invalid Dependency");
				done();
			}
		});

		it("Should add dependency for a given dependent", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			const req3 = getCreateFolderRequestCopy();
			req1.id = "1";
			req2.id = "2";
			req3.id = "3";
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			batchReq.addDependency("2", "1");
			assert.isDefined(batchReq.requests.get("2").dependsOn);
			batchReq.addDependency("2", "3");
			assert.equal(batchReq.requests.get("2").dependsOn.length, 2);
			done();
		});

		it("Should return error for adding duplicate dependency", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			req1.id = "1";
			req2.id = "2";
			const batchReq = new BatchRequestContent([req1, req2]);
			batchReq.addDependency("2", "1");
			try {
				batchReq.addDependency("2", "1");
			} catch (e) {
				assert.equal(e.name, "Duplicate Dependency");
				done();
			}
		});

		it("Should add dependency for dependency id not given", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			const req3 = getCreateFolderRequestCopy();
			req1.id = "1";
			req2.id = "2";
			req3.id = "3";
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			batchReq.addDependency("2");
			assert.isDefined(batchReq.requests.get("2").dependsOn);
			batchReq.addDependency("3");
			assert.isDefined(batchReq.requests.get("3").dependsOn);
			done();
		});

		it("Should return error for adding duplicate dependency when dependency id not given", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			req1.id = "1";
			req2.id = "2";
			const batchReq = new BatchRequestContent([req1, req2]);
			batchReq.addDependency("2");
			assert.isDefined(batchReq.requests.get("2").dependsOn);
			try {
				batchReq.addDependency("2");
			} catch (e) {
				assert.equal(e.name, "Duplicate Dependency");
				done();
			}
		});

		it("Should return error for adding dependency when only one request is present and dependency id not given", (done) => {
			const req1 = getCreateFolderRequestCopy();
			req1.id = "1";
			const batchReq = new BatchRequestContent([req1]);
			try {
				batchReq.addDependency("1");
			} catch (e) {
				assert.equal(e.name, "Invalid Dependency Addition");
				done();
			}
		});
	});

	describe("getContent", () => {
		it("Should return error for empty requests", async () => {
			const batchReq = new BatchRequestContent();
			try {
				const content = await batchReq.getContent();
				throw new Error("Test Failed - Something wrong with the empty requests validation");
			} catch (error) {
				assert.equal(error.name, "Empty Payload");
			}
		});

		it("Should return json content", async () => {
			const req = getCreateFolderRequestCopy();
			const batchReq = new BatchRequestContent([req]);
			try {
				const content = await batchReq.getContent();
				assert.isDefined(content.requests[0].body);
				assert.equal(typeof content.requests[0].body, "object");
			} catch (error) {
				throw error;
			}
		});
	});

	describe("removeDependency", function() {
		this.timeout(20 * 1000);

		it("Should return false for dependent not present", (done) => {
			const batchReq = new BatchRequestContent();
			assert.equal(false, batchReq.removeDependency("1"));
			done();
		});

		it("Should return false for dependency array not present in the request", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			req1.id = "1";
			req2.id = "2";
			const batchReq = new BatchRequestContent([req1, req2]);
			assert.equal(false, batchReq.removeDependency("2"));
			done();
		});

		it("Should return false for given dependency id is not present in the dependent request", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			req1.id = "1";
			req2.id = "2";
			const batchReq = new BatchRequestContent([req1, req2]);
			batchReq.addDependency("2");
			assert.equal(false, batchReq.removeDependency("2", "5"));
			done();
		});

		it("Should delete the given dependency and dependent", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			req1.id = "1";
			req2.id = "2";
			const batchReq = new BatchRequestContent([req1, req2]);
			batchReq.addDependency("2");
			assert.equal(true, batchReq.removeDependency("2", "1"));
			done();
		});

		it("Should delete all dependencies for a given dependent", (done) => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			const req3 = getCreateFolderRequestCopy();
			req1.id = "1";
			req2.id = "2";
			req3.id = "3";
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			batchReq.addDependency("3", "1");
			batchReq.addDependency("3", "2");
			assert.equal(true, batchReq.removeDependency("3"));
			done();
		});
	});

	describe("validateDependencies", () => {
		/* tslint:disable: no-string-literal */
		it("Should throw error for empty request object", (done) => {
			try {
				BatchRequestContent["validateDependencies"](new Map() as Map<string, BatchRequestStep>);
				throw new Error("Test Failed - Something wrong with the empty requests check");
			} catch (error) {
				assert.equal(error.name, "Empty Requests Error");
				done();
			}
		});

		it("isParallel - Should validate for single request", () => {
			const req = getCreateFolderRequestCopy();
			const batchReq = new BatchRequestContent([req]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isParallel - Should validate for multiple requests", () => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestCopy();
			req2.id = "2";
			const batchReq = new BatchRequestContent([req1, req2]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isParallel - Should validate for requests with undefined dependsOn", () => {
			const req1 = getCreateFolderRequestCopy();
			req1.id = "1";
			const req2 = getCreateFolderRequestCopy();
			req2.id = "2";
			const batchReq = new BatchRequestContent([req1, req2]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isParallel - Should validate for requests with empty dependsOn array", () => {
			const req1 = getCreateFolderRequestCopy();
			req1.id = "1";
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			const batchReq = new BatchRequestContent([req1, req2]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSerial - Should not validate for first request having dependsOn", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			req1.dependsOn = ["2"];
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(false, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSerial - Should validate for first request with undefined dependsOn", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			req1.dependsOn = undefined;
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["1"];
			const batchReq = new BatchRequestContent([req1, req2]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSerial - Should validate for first request with empty dependsOn array", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["1"];
			const batchReq = new BatchRequestContent([req1, req2]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSerial - Should not validate for a request does not depend on anything", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["1"];
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(false, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSerial - Should not validate for a request does not depend on previous request", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["1"];
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["4"];
			const req4 = getCreateFolderRequestWithDependsOnCopy();
			req4.id = "4";
			const batchReq = new BatchRequestContent([req1, req2, req3, req4]);
			assert.equal(false, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSerial - Should not validate for requests having more than one dependencies", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["1"];
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["2"];
			const req4 = getCreateFolderRequestWithDependsOnCopy();
			req4.id = "4";
			req4.dependsOn = ["2", "3"];
			const batchReq = new BatchRequestContent([req1, req2, req3, req4]);
			assert.equal(false, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSerial - Should validate for proper serial dependencies", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["1"];
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["2"];
			const req4 = getCreateFolderRequestWithDependsOnCopy();
			req4.id = "4";
			req4.dependsOn = ["3"];
			const batchReq = new BatchRequestContent([req1, req2, req3, req4]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSame - Should validate for first request with undefined dependsOn", () => {
			const req1 = getCreateFolderRequestCopy();
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["1"];
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["1"];
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSame - Should validate for first request with empty dependsOn array", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			req1.id = "1";
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["1"];
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["1"];
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSame - Should not validate for first request having dependency on itself", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			req1.dependsOn = ["1"];
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["1"];
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["1"];
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(false, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSame - Should not validate for first request having dependency on non existing request", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			req1.dependsOn = ["10"];
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["10"];
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["10"];
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(false, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSame - Should validate for requests dependsOn some middle order request", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			req1.dependsOn = ["2"];
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["2"];
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(true, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSame - Should not validate for middle order request with empty dependsOn", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["1"];
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(false, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSame - Should not validate for middle order request dependency request has its own dependency", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			req1.dependsOn = ["2"];
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			req2.dependsOn = ["2"];
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["2"];
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(false, BatchRequestContent["validateDependencies"](batchReq.requests));
		});

		it("isSame - Should not validate for middle order request does depend on some other request other than dependency request", () => {
			const req1 = getCreateFolderRequestWithDependsOnCopy();
			req1.dependsOn = ["2"];
			const req2 = getCreateFolderRequestWithDependsOnCopy();
			req2.id = "2";
			const req3 = getCreateFolderRequestWithDependsOnCopy();
			req3.id = "3";
			req3.dependsOn = ["3"];
			const batchReq = new BatchRequestContent([req1, req2, req3]);
			assert.equal(false, BatchRequestContent["validateDependencies"](batchReq.requests));
		});
		/* tslint:enable: no-string-literal */
	});
});
