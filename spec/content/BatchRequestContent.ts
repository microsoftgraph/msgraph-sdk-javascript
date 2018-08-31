import { assert } from "chai";
import { randomString } from "../test-helper";
import { BatchRequestContent } from "../../lib/src/BatchRequestContent";

declare const describe, it;

let fileName = "test.pdf";
let oneDriveFileRequest = new Request(`/me/drive/root:/${fileName}:/content`, {
    method: "GET",
    headers: {
        dummy: "dummyHeader"
    }
});

let folderName = randomString();
let folderDetails = {
    "name": folderName,
    "folder": {}
};
let createFolder = {
    url: "/me/drive/root/children",
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: folderDetails
};

let createFolderRequest = new Request("/me/drive/root/children", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(folderDetails)
});

describe('Create', function () {
    this.timeout(20 * 1000);
    it('Should Create BatchRequestContent instance with no requests', (done) => {
        BatchRequestContent.create()
            .then((batchReq) => {
                assert.equal(batchReq.constructor.name, "BatchRequestContent");
                done();
            });
    });

    it('Should create BatchRequestContent instance with empty array', (done) => {
        BatchRequestContent.create([])
            .then((batchReq) => {
                assert.equal(batchReq.constructor.name, "BatchRequestContent");
                done();
            });
    });

    it('Should create BatchRequestContent instance with requests json', (done) => {
        let createFolderDuplicate1 = JSON.parse(JSON.stringify(createFolder));
        let createFolderDuplicate2 = JSON.parse(JSON.stringify(createFolder));
        BatchRequestContent.create([createFolderDuplicate1, createFolderDuplicate2])
            .then((batchReq) => {
                assert.equal(batchReq.requests.size, 2);
                done();
            });
    });

    it('Should create BatchRequestContent instance with Request objects', (done) => {
        let oneDriveFileRequest1 = oneDriveFileRequest.clone();
        let oneDriveFileRequest2 = oneDriveFileRequest.clone();
        BatchRequestContent.create([oneDriveFileRequest, oneDriveFileRequest1, oneDriveFileRequest2])
            .then((batchReq) => {
                assert.equal(batchReq.requests.size, 3);
                done();
            });
    });

    it('Should create BatchRequestContent instance with both request json and Requests objects', (done) => {
        let createFolderDuplicate1 = JSON.parse(JSON.stringify(createFolder));
        let createFolderDuplicate2 = JSON.parse(JSON.stringify(createFolder));
        let oneDriveFileRequest1 = oneDriveFileRequest.clone();
        BatchRequestContent.create([createFolderDuplicate1, createFolderDuplicate2, oneDriveFileRequest1])
            .then((batchReq) => {
                assert.equal(batchReq.requests.size, 3);
                done();
            });
    });

    it('Should create random unique id', (done) => {
        let createFolderDuplicate1 = JSON.parse(JSON.stringify(createFolder));
        BatchRequestContent.create([createFolderDuplicate1])
            .then((batchReq) => {
                let iterator = batchReq.requests.keys();
                let id = iterator.next().value;
                assert.equal(batchReq.requests.get(id).id, id);
                done();
            });
    });

    it('Should use the user given unique id', (done) => {
        let createFolderDuplicate1 = JSON.parse(JSON.stringify(createFolder));
        let id = "1";
        createFolderDuplicate1.id = id;
        BatchRequestContent.create([createFolderDuplicate1])
            .then((batchReq) => {
                assert.equal(batchReq.requests.get(id).id, id);
                done();
            });
    });

    it('Should return error incase of number of requests limit exceeding', (done) => {
        let requests = [];
        let stringReq = JSON.stringify(createFolder);
        for(let i = 0; i < 25; i++) {
            requests.push(JSON.parse(stringReq));
        }
        BatchRequestContent.create(requests)
            .then(() => {
                throw new Error('Something wrong with the limiting requests'); 
            })
            .catch((error) => {
                assert.equal(error.name, "Limit Exceeded Error");
                done();
            });
    });
});

describe('getBody', function () {
    this.timeout(20 * 1000);
    it('Should return the json', (done) => {
        let createFolderRequest1 = createFolderRequest.clone();
        BatchRequestContent.getBody(createFolderRequest1)
            .then((body) => {
                assert.equal(typeof body, "object");
                done();
            });
    });
});

describe('addRequest', function() {
    this.timeout(20 * 1000);
    it('Should emit size exceed error', (done) => {
        let requests = [];
        let stringReq = JSON.stringify(createFolder);
        for (let i = 0; i < 20; i++) {
            requests.push(JSON.parse(stringReq));
        }
        BatchRequestContent.create(requests)
            .then((batchReq) => {
                batchReq.addRequest(JSON.parse(stringReq))
                    .then(() => {
                        throw new Error("Something wrong with the limiting requests");
                    })
                    .catch((error) => {
                        assert.equal(error.name, "Limit Exceeded Error");
                        done();
                    });
            });
    });

    it('Should add Request JSON to the batch request content instance', (done) => {
        let req = JSON.parse(JSON.stringify(createFolder));
        req.id = "1";
        BatchRequestContent.create([])
            .then((batchReq) => {
                batchReq.addRequest(req)
                    .then((id) => {
                        assert.equal(req.id, id);
                        done();
                    });
            });
    });

    it('Should add Request JSON to the batch request content instance and use the user given request id', (done) => {
        let req = JSON.parse(JSON.stringify(createFolder));
        req.id = "1";
        BatchRequestContent.create()
            .then((batchReq) => {
                batchReq.addRequest(req)
                    .then((id) => {
                        let iterator = batchReq.requests.keys();
                        let key = iterator.next().value;
                        assert.equal(key, id);
                        done();
                    });
            });
    });

    it('Should add request by creating random unique id', (done) => {
        let createFolderDuplicate1 = JSON.parse(JSON.stringify(createFolder));
        BatchRequestContent.create()
            .then((batchReq) => {
                batchReq.addRequest(createFolderDuplicate1)
                    .then((id) => {
                        let iterator = batchReq.requests.keys();
                        let key = iterator.next().value;
                        assert.equal(key, id);
                        done();
                    });
            });
    });  
});

describe('removeRequest', function() {
    it('Should delete the request present in the batch', (done) => {
        let req = JSON.parse(JSON.stringify(createFolder));
        req.id = "1";
        BatchRequestContent.create([req])
            .then((batchReq) => {
                assert.equal(true, batchReq.removeRequest(req.id));
                done();
            });
    });

    it('Should return false for the request that is not present in the batch', (done) => {
        let req = JSON.parse(JSON.stringify(createFolder));
        req.id = "1";
        BatchRequestContent.create([req])
            .then((batchReq) => {
                assert.equal(false, batchReq.removeRequest("100"));
                done();
            });
    });

    it('Should remove dependencies in case dependencies present', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder)),
            req2 = JSON.parse(JSON.stringify(createFolder)),
            req3 = JSON.parse(JSON.stringify(createFolder)),
            req4 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        req2.id = "2";
        req3.id = "3";
        req4.id = "4";
        BatchRequestContent.create([req1, req2, req3, req4])
            .then((batchReq) => {
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
});

describe('addDependency', function() {
    this.timeout(20 * 1000);
    it('Should return error for request with dependent id not present', (done) => {
        let req = JSON.parse(JSON.stringify(createFolder));
        BatchRequestContent.create([req])
            .then((batchReq) => {
                try {
                    batchReq.addDependency("1");
                    throw new Error("Dependent validation is failing");
                } catch (err) {
                    assert.equal(err.name, "Invalid Dependent");
                    done();
                }
            });
    });

    it('Should return error for the request with given dependency id is not present', (done) => {
        let req = JSON.parse(JSON.stringify(createFolder));
        req.id = "1";
        BatchRequestContent.create([req])
            .then((batchReq) => {
                try {
                    batchReq.addDependency("1", "100");
                    throw new Error("Dependency validation is failing");
                } catch (err) {
                    assert.equal(err.name, "Invalid Dependency");
                    done();
                }
            });
    });

    it('Should add dependency for a given dependent', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder)),
            req2 = JSON.parse(JSON.stringify(createFolder)),
            req3 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        req2.id = "2";
        req3.id = "3";
        BatchRequestContent.create([req1, req2, req3])
            .then((batchReq) => {
                batchReq.addDependency("2", "1");
                assert.isDefined(batchReq.requests.get("2").dependsOn);
                batchReq.addDependency("2", "3");
                assert.equal(batchReq.requests.get("2").dependsOn.length, 2);
                done();
            });
    });

    it('Should return error for adding duplicate dependency', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder)),
            req2 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        req2.id = "2";
        BatchRequestContent.create([req1, req2])
            .then((batchReq) => {
                batchReq.addDependency("2", "1");
                try {
                    batchReq.addDependency("2", "1");
                } catch (e) {
                    assert.equal(e.name, "Duplicate Dependency");
                    done();
                }
            });
    });

    it('Should add dependency for dependency id not given', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder)),
            req2 = JSON.parse(JSON.stringify(createFolder)),
            req3 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        req2.id = "2";
        req3.id = "3";
        BatchRequestContent.create([req1, req2, req3])
            .then((batchReq) => {
                batchReq.addDependency("2");
                assert.isDefined(batchReq.requests.get("2").dependsOn);
                batchReq.addDependency("3");
                assert.isDefined(batchReq.requests.get("3").dependsOn);
                done();
            });
    });

    it('Should return error for adding duplicate dependency when dependency id not given', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder)),
            req2 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        req2.id = "2";
        BatchRequestContent.create([req1, req2])
            .then((batchReq) => {
                batchReq.addDependency("2");
                assert.isDefined(batchReq.requests.get("2").dependsOn);
                try {
                    batchReq.addDependency("2");
                } catch (e) {
                    assert.equal(e.name, "Duplicate Dependency");
                    done();
                }
            });
    });

    it('Should return error for adding dependency when only one request is present and dependency id not given', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        BatchRequestContent.create([req1])
            .then((batchReq) => {
                try {
                    batchReq.addDependency("1");
                } catch (e) {
                    assert.equal(e.name, "Invalid Dependency Addition");
                    done();
                }
            });
    });
});

describe('removeDependency', function() {
    this.timeout(20 * 1000);

    it('Should return false for dependent not present', (done) => {
        BatchRequestContent.create()
            .then((batchReq) => {
                assert.equal(false, batchReq.removeDependency("1"));
                done();
            });
    });

    it('Should return false for dependency array not present in the request', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder));
        let req2 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        req2.id = "2";
        BatchRequestContent.create([req1, req2])
            .then((batchReq) => {
                assert.equal(false, batchReq.removeDependency("2"));
                done();
            });
    });

    it('Should return false for given dependency id is not present in the dependent request', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder));
        let req2 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        req2.id = "2";
        BatchRequestContent.create([req1, req2])
            .then((batchReq) => {
                batchReq.addDependency("2");
                assert.equal(false, batchReq.removeDependency("2", "5"));
                done();
            });
    });

    it('Should delete the given dependency and dependent', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder));
        let req2 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        req2.id = "2";
        BatchRequestContent.create([req1, req2])
            .then((batchReq) => {
                batchReq.addDependency("2");
                assert.equal(true, batchReq.removeDependency("2", "1"));
                done();
            });
    });

    it('Should delete all dependencies for a given dependent', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder));
        let req2 = JSON.parse(JSON.stringify(createFolder));
        let req3 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        req2.id = "2";
        req3.id = "3";
        BatchRequestContent.create([req1, req2, req3])
            .then((batchReq) => {
                batchReq.addDependency("3", "1");
                batchReq.addDependency("3", "2");
                assert.equal(true, batchReq.removeDependency("3"));
                done();
            });
    });
});

describe('content', function() {
    it('Should return error for getting content on no requests added batch', (done) => {
        BatchRequestContent.create()
            .then((batchReq) => {
                try {
                    batchReq.content();
                    throw new Error("Empty requests present check is not working");
                } catch (error) {
                    assert.equal(error.name, "Empty Payload");
                    done();
                }
            });
    });

    it('Should return content', (done) => {
        let req1 = JSON.parse(JSON.stringify(createFolder));
        req1.id = "1";
        BatchRequestContent.create([req1])
            .then((batchReq) => {
                let content = batchReq.content();
                assert.isDefined(content.requests);
                done();
            });
    });
});