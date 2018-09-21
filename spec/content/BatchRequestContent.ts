import { assert } from "chai";
import { randomString } from "../test-helper";
import { BatchRequestContent, BatchRequestStep } from "../../lib/src/content/BatchRequestContent";
import * as fs from "fs";

declare const describe, it;

let folderName = randomString();
let folderDetails = {
    "name": folderName,
    "folder": {}
};

let createFolderRequest = new Request("/me/drive/root/children", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(folderDetails)
});

const getCreateFolderRequestCopy = () => {
    return {
        id: "1",
        request: createFolderRequest
    }
};

const getCreateFolderRequestWithDependsOnCopy = () => {
    let data = {
        id: "1",
        request: createFolderRequest,
        dependsOn: undefined
    }
    data.dependsOn = [];
    return data;
};

describe('Create', function () {
    this.timeout(20 * 1000);
    it('Should Create BatchRequestContent instance with no requests', (done) => {
        let batchReq = new BatchRequestContent();
        assert.equal(batchReq.constructor.name, "BatchRequestContent");
        done();
    });

    it('Should create BatchRequestContent instance with empty array', (done) => {
        let batchReq = new BatchRequestContent([]);
        assert.equal(batchReq.constructor.name, "BatchRequestContent");
        done();
    });

    it('Should create BatchRequestContent instance with requests', (done) => {
        let createFolderDuplicate1 = getCreateFolderRequestCopy();
        let createFolderDuplicate2 = getCreateFolderRequestCopy();
        createFolderDuplicate2.id = "2";
        let batchReq = new BatchRequestContent([createFolderDuplicate1, createFolderDuplicate2]);
        assert.equal(batchReq.requests.size, 2);
        done();
    });

    it('Should throw error for empty request id', (done) => {
        let createFolderDuplicate1 = getCreateFolderRequestCopy();
        createFolderDuplicate1.id = "";
        try {
            let batchReq = new BatchRequestContent([createFolderDuplicate1]);
            throw new Error("Something wrong with the empty id check");
        } catch (error) {
            assert.equal(error.name, "Empty Id For Request");
        }
        done();
    });

    it('Should return error incase of number of requests limit exceeding', (done) => {
        let requests = [];
        for(let i = 0; i < 25; i++) {
            let req = getCreateFolderRequestCopy();
            req.id = "" + i;
            requests.push(req);
        }
        try {
            let batchReq = new BatchRequestContent(requests);
            throw new Error('Something wrong with the limiting requests');
        } catch (error) {
            assert.equal(error.name, "Limit Exceeded Error");
            done();
        }
    });
});

describe('addRequest', function() {
    this.timeout(20 * 1000);
    it('Should emit size exceed error', (done) => {
        let requests = [];
        for(let i = 0; i < 20; i++) {
            let req = getCreateFolderRequestCopy();
            req.id = "" + i;
            requests.push(req);
        }
        let req = getCreateFolderRequestCopy();
        req.id = "100";
        let batchReq = new BatchRequestContent(requests);
        try {
            batchReq.addRequest(req);
            throw new Error("Something wrong with the limiting requests");
        } catch (error) {
            assert.equal(error.name, "Limit Exceeded Error");
            done();
        }
    });

    it('Should add Request JSON to the BatchRequestContent instance', (done) => {
        let req = getCreateFolderRequestCopy();
        req.id = "100";
        let batchReq = new BatchRequestContent();
        let id = batchReq.addRequest(req);
        assert.equal(req.id, id);
        done();
    });

    it('Should throw duplicate id error', (done) => {
        let req1 = getCreateFolderRequestCopy();
        let req2 = getCreateFolderRequestCopy();
        let batchReq = new BatchRequestContent([req1]);
        try {
            batchReq.addRequest(req2);
            throw new Error("Something wrong with duplicate id validation");
        } catch (error) {
            assert.equal(error.name, "Duplicate RequestId Error");
            done();
        }        
    });


    it('Should throw duplicate id error', (done) => {
        let req = getCreateFolderRequestCopy();
        req.id = "";
        let batchReq = new BatchRequestContent();
        try {
            batchReq.addRequest(req);
            throw new Error("Something wrong with empty id validation");
        } catch (error) {
            assert.equal(error.name, "Empty Id For Request");
            done();
        }
    });
});

describe('removeRequest', function() {
    it('Should delete the request present in the batch', (done) => {
        let req = getCreateFolderRequestCopy();
        let batchReq = new BatchRequestContent([req]);
        assert.equal(true, batchReq.removeRequest(req.id));
        done();
    });

    it('Should return false for the request that is not present in the batch', (done) => {
        let req = getCreateFolderRequestCopy();
        let batchReq = new BatchRequestContent([req]);
        assert.equal(false, batchReq.removeRequest("1000"));
        done();
    });

    it('Should remove dependencies in case dependencies present', (done) => {
        let req1 = getCreateFolderRequestCopy(),
            req2 = getCreateFolderRequestCopy(),
            req3 = getCreateFolderRequestCopy(),
            req4 = getCreateFolderRequestCopy();
        req1.id = "1";
        req2.id = "2";
        req3.id = "3";
        req4.id = "4";
        let batchReq = new BatchRequestContent([req1, req2, req3, req4]);
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

describe('addDependency', function() {
    this.timeout(20 * 1000);
    it('Should return error for request with dependent id not present', (done) => {
        let req = getCreateFolderRequestCopy();
        let batchReq = new BatchRequestContent([req]);
        try {
            batchReq.addDependency("1");
            throw new Error("Dependent validation is failing");
        } catch (err) {
            assert.equal(err.name, "Invalid Dependency Addition");
            done();
        }
    });

    it('Should return error for the request with given dependency id is not present', (done) => {
        let req = getCreateFolderRequestCopy();
        let batchReq = new BatchRequestContent([req]);
        try {
            batchReq.addDependency("1", "100");
            throw new Error("Dependency validation is failing");
        } catch (err) {
            assert.equal(err.name, "Invalid Dependency");
            done();
        }
    });

    it('Should add dependency for a given dependent', (done) => {
        let req1 = getCreateFolderRequestCopy(),
            req2 = getCreateFolderRequestCopy(),
            req3 = getCreateFolderRequestCopy();
        req1.id = "1";
        req2.id = "2";
        req3.id = "3";
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        batchReq.addDependency("2", "1");
        assert.isDefined(batchReq.requests.get("2").dependsOn);
        batchReq.addDependency("2", "3");
        assert.equal(batchReq.requests.get("2").dependsOn.length, 2);
        done();
    });

    it('Should return error for adding duplicate dependency', (done) => {
        let req1 = getCreateFolderRequestCopy(),
            req2 = getCreateFolderRequestCopy();
        req1.id = "1";
        req2.id = "2";
        let batchReq = new BatchRequestContent([req1, req2]);
        batchReq.addDependency("2", "1");
        try {
            batchReq.addDependency("2", "1");
        } catch (e) {
            assert.equal(e.name, "Duplicate Dependency");
            done();
        }
    });

    it('Should add dependency for dependency id not given', (done) => {
        let req1 = getCreateFolderRequestCopy(),
            req2 = getCreateFolderRequestCopy(),
            req3 = getCreateFolderRequestCopy();
        req1.id = "1";
        req2.id = "2";
        req3.id = "3";
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        batchReq.addDependency("2");
        assert.isDefined(batchReq.requests.get("2").dependsOn);
        batchReq.addDependency("3");
        assert.isDefined(batchReq.requests.get("3").dependsOn);
        done();
    });

    it('Should return error for adding duplicate dependency when dependency id not given', (done) => {
        let req1 = getCreateFolderRequestCopy(),
            req2 = getCreateFolderRequestCopy();
        req1.id = "1";
        req2.id = "2";
        let batchReq = new BatchRequestContent([req1, req2]);
        batchReq.addDependency("2");
        assert.isDefined(batchReq.requests.get("2").dependsOn);
        try {
            batchReq.addDependency("2");
        } catch (e) {
            assert.equal(e.name, "Duplicate Dependency");
            done();
        }
    });

    it('Should return error for adding dependency when only one request is present and dependency id not given', (done) => {
        let req1 = getCreateFolderRequestCopy();
        req1.id = "1";
        let batchReq = new BatchRequestContent([req1]);
        try {
            batchReq.addDependency("1");
        } catch (e) {
            assert.equal(e.name, "Invalid Dependency Addition");
            done();
        }
    });
});

describe('getContent', function() {
    it('Should return error for empty requests', async () => {
        let batchReq = new BatchRequestContent();
        try {
            let content = await batchReq.getContent();
            throw new Error("Something wrong with the empty requests validation");
        } catch (error) {
            assert.equal(error.name, "Empty Payload");
        }
    });

    it('Should return json content', async () => {
        let req = getCreateFolderRequestCopy();
        let batchReq = new BatchRequestContent([req]);
        try {
            let content = await batchReq.getContent();
            assert.isDefined(content.requests[0].body);
            assert.equal(typeof content.requests[0].body, "object");
        } catch (error) {
            throw error;
        }
    });

    it('Should return image\'s base64 string', async () => {
        let fileName = "sample_image.jpg";
        fs.readFile(`./spec/sample_files/${fileName}`, {}, async (err, file) => {
            if (err) {
                throw err;
            }
            let uploadOneDriveFile = {
                id: "1",
                request: new Request(`/me/drive/root:/Documents/${fileName}:/content`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "image/jpg"
                    },
                    body: file
                })
            };
            let batchReq = new BatchRequestContent([uploadOneDriveFile]);
            try {
                let content = await batchReq.getContent();
                assert.isDefined(content.requests[0].body);
            } catch (error) {
                throw error;
            }
        });
    });

    it('Should throw error for request does not have content-type header if it does have a body', async () => {
        let createFolderReqWithoutHeader = new Request("/me/drive/root/children", {
            method: "POST",
            body: JSON.stringify(folderDetails)
        });
        
        let batchReq = new BatchRequestContent([{
            id: "1",
            request: createFolderReqWithoutHeader
        }]);
        try {
            let content = await batchReq.getContent();
            throw new Error("Something wrong with the header checking");
        } catch (error) {
            assert.equal(error.name, "Invalid Content-type header");
        }
    });
});

describe('removeDependency', function() {
    this.timeout(20 * 1000);

    it('Should return false for dependent not present', (done) => {
        let batchReq = new BatchRequestContent();
        assert.equal(false, batchReq.removeDependency("1"));
        done();
    });

    it('Should return false for dependency array not present in the request', (done) => {
        let req1 = getCreateFolderRequestCopy();
        let req2 = getCreateFolderRequestCopy();
        req1.id = "1";
        req2.id = "2";
        let batchReq = new BatchRequestContent([req1, req2]);
        assert.equal(false, batchReq.removeDependency("2"));
        done();
    });

    it('Should return false for given dependency id is not present in the dependent request', (done) => {
        let req1 = getCreateFolderRequestCopy();
        let req2 = getCreateFolderRequestCopy();
        req1.id = "1";
        req2.id = "2";
        let batchReq = new BatchRequestContent([req1, req2]);
        batchReq.addDependency("2");
        assert.equal(false, batchReq.removeDependency("2", "5"));
        done();
    });

    it('Should delete the given dependency and dependent', (done) => {
        let req1 = getCreateFolderRequestCopy();
        let req2 = getCreateFolderRequestCopy();
        req1.id = "1";
        req2.id = "2";
        let batchReq = new BatchRequestContent([req1, req2]);
        batchReq.addDependency("2");
        assert.equal(true, batchReq.removeDependency("2", "1"));
        done();
    });

    it('Should delete all dependencies for a given dependent', (done) => {
        let req1 = getCreateFolderRequestCopy();
        let req2 = getCreateFolderRequestCopy();
        let req3 = getCreateFolderRequestCopy();
        req1.id = "1";
        req2.id = "2";
        req3.id = "3";
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        batchReq.addDependency("3", "1");
        batchReq.addDependency("3", "2");
        assert.equal(true, batchReq.removeDependency("3"));
        done();
    });
});

describe('validateDependencies', function() {
    it('Should throw error for empty request object', (done) => {
        try {
            BatchRequestContent.validateDependencies(<Map<string, BatchRequestStep>>new Map());
            throw new Error("Something wrong with the empty requests check");
        } catch (error) {
            assert.equal(error.name, "Empty Requests Error");
            done();
        }
    });

    it('isParallel - Should validate for single request', () => {
        let req = getCreateFolderRequestCopy();
        let batchReq = new BatchRequestContent([req]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it ('isParallel - Should validate for multiple requests', () => {
        let req1 = getCreateFolderRequestCopy();
        let req2 = getCreateFolderRequestCopy();
        req2.id = "2";
        let batchReq = new BatchRequestContent([req1, req2]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isParallel - Should validate for requests with undefined dependsOn', () => {
        let req1 = getCreateFolderRequestCopy();
        req1.id = "1";
        let req2 = getCreateFolderRequestCopy();
        req2.id = "2";
        let batchReq = new BatchRequestContent([req1, req2]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isParallel - Should validate for requests with empty dependsOn array', () => {
        let req1 = getCreateFolderRequestCopy();
        req1.id = "1";
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        let batchReq = new BatchRequestContent([req1, req2]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it ('isSerial - Should not validate for first request having dependsOn', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        req1.dependsOn = ["2"];
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(false, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it ('isSerial - Should validate for first request with undefined dependsOn', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        req1.dependsOn = undefined;
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["1"];
        let batchReq = new BatchRequestContent([req1, req2]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSerial - Should validate for first request with empty dependsOn array', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["1"];
        let batchReq = new BatchRequestContent([req1, req2]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSerial - Should not validate for a request does not depend on anything', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["1"];
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(false, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSerial - Should not validate for a request does not depend on previous request', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["1"];
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["4"];
        let req4 = getCreateFolderRequestWithDependsOnCopy();
        req4.id = "4";
        let batchReq = new BatchRequestContent([req1, req2, req3, req4]);
        assert.equal(false, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSerial - Should not validate for requests having more than one dependencies', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["1"];
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["2"];
        let req4 = getCreateFolderRequestWithDependsOnCopy();
        req4.id = "4";
        req4.dependsOn = ["2", "3"];
        let batchReq = new BatchRequestContent([req1, req2, req3, req4]);
        assert.equal(false, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSerial - Should validate for proper serial dependencies', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["1"];
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["2"];
        let req4 = getCreateFolderRequestWithDependsOnCopy();
        req4.id = "4";
        req4.dependsOn = ["3"];
        let batchReq = new BatchRequestContent([req1, req2, req3, req4]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSame - Should validate for first request with undefined dependsOn', () => {
        let req1 = getCreateFolderRequestCopy();
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["1"];
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["1"];
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSame - Should validate for first request with empty dependsOn array', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        req1.id = "1";
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["1"];
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["1"];
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSame - Should not validate for first request having dependency on itself', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        req1.dependsOn = ["1"];
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["1"];
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["1"];
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(false, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSame - Should not validate for first request having dependency on non existing request', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        req1.dependsOn = ["10"];
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["10"];
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["10"];
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(false, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSame - Should validate for requests dependsOn some middle order request', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        req1.dependsOn = ["2"];
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["2"];
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(true, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSame - Should not validate for middle order request with empty dependsOn', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["1"];
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(false, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSame - Should not validate for middle order request dependency request has its own dependency', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        req1.dependsOn = ["2"];
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        req2.dependsOn = ["2"];
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["2"];
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(false, BatchRequestContent.validateDependencies(batchReq.requests));
    });

    it('isSame - Should not validate for middle order request does depend on some other request other than dependency request', () => {
        let req1 = getCreateFolderRequestWithDependsOnCopy();
        req1.dependsOn = ["2"];
        let req2 = getCreateFolderRequestWithDependsOnCopy();
        req2.id = "2";
        let req3 = getCreateFolderRequestWithDependsOnCopy();
        req3.id = "3";
        req3.dependsOn = ["3"];
        let batchReq = new BatchRequestContent([req1, req2, req3]);
        assert.equal(false, BatchRequestContent.validateDependencies(batchReq.requests));
    });
});
