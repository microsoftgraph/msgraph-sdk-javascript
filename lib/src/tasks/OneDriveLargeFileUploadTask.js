"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var LargeFileUploadTask_1 = require("./LargeFileUploadTask");
var OneDriveLargeFileUploadTaskUtil_1 = require("./OneDriveLargeFileUploadTaskUtil");
;
/**
 * @class
 * Class representing OneDriveLargeFileUploadTask
 */
var OneDriveLargeFileUploadTask = /** @class */ (function (_super) {
    tslib_1.__extends(OneDriveLargeFileUploadTask, _super);
    /**
     * @constructor
     * Constructs a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task options
     * @returns An instance of OneDriveLargeFileUploadTask
     */
    function OneDriveLargeFileUploadTask(client, file, uploadSession, options) {
        return _super.call(this, client, file, uploadSession, options) || this;
    }
    /**
     * @public
     * @static
     * @async
     * Creates a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {Blob | Buffer | File} file - File represented as Blob, Buffer or File
     * @param {OneDriveLargeFileUploadOptions} options - The options for upload task
     * @returns The promise that will be resolves to OneDriveLargeFileUploadTask instance
     */
    OneDriveLargeFileUploadTask.create = function (client, file, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fileObj, _file, b, requestUrl, session, rangeSize, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileObj = {};
                        fileObj.name = options.fileName;
                        switch (file.constructor.name) {
                            case "Blob":
                                fileObj.content = new File([file], fileObj.name);
                                fileObj.size = fileObj.content.size;
                                break;
                            case "File":
                                _file = file;
                                fileObj.content = _file;
                                fileObj.size = _file.size;
                                break;
                            case "Buffer":
                                b = file;
                                fileObj.size = b.byteLength - b.byteOffset;
                                fileObj.content = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
                                break;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        requestUrl = OneDriveLargeFileUploadTask.constructCreateSessionUrl(options.fileName, options.path);
                        return [4 /*yield*/, OneDriveLargeFileUploadTask.createUploadSession(client, requestUrl, options.fileName)];
                    case 2:
                        session = _a.sent();
                        rangeSize = OneDriveLargeFileUploadTaskUtil_1.getValidRangeSize(options.rangeSize);
                        return [2 /*return*/, new OneDriveLargeFileUploadTask(client, fileObj, session, { rangeSize: rangeSize })];
                    case 3:
                        err_1 = _a.sent();
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @static
     * Constructs the create session url for Onedrive
     * @param {string} fileName - The name of the file
     * @param {path} [path = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH] - The path for the upload
     * @returns The constructed create session url
     */
    OneDriveLargeFileUploadTask.constructCreateSessionUrl = function (fileName, path) {
        if (path === void 0) { path = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH; }
        fileName = fileName.trim();
        path = path.trim();
        if (path === "") {
            path = "/";
        }
        if (path[0] !== "/") {
            path = "/" + path;
        }
        if (path[path.length - 1] !== "/") {
            path = path + "/";
        }
        return encodeURI("/me/drive/root:" + path + fileName + ":/createUploadSession");
    };
    /**
     * @public
     * @static
     * @async
     * Makes request to the server to create an upload session
     * @param {Client} client - The GraphClient instance
     * @param {string} requestUrl - The URL to create the upload session
     * @param {string} fileName - The name of a file to upload, (with extension)
     * @returns The promise that resolves to LargeFileUploadSession
     */
    OneDriveLargeFileUploadTask.createUploadSession = function (client, requestUrl, fileName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, session, largeFileUploadSession, err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = {
                            item: {
                                "@microsoft.graph.conflictBehavior": "rename",
                                name: fileName
                            }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.api(requestUrl).post(payload)];
                    case 2:
                        session = _a.sent(), largeFileUploadSession = {
                            url: session.uploadUrl,
                            expiry: new Date(session.expirationDateTime)
                        };
                        return [2 /*return*/, largeFileUploadSession];
                    case 3:
                        err_2 = _a.sent();
                        throw err_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * Commits upload session to end uploading
     * @param {string} requestUrl - The URL to commit the upload session
     * @returns The promise resolves to committed response
     */
    OneDriveLargeFileUploadTask.prototype.commit = function (requestUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self, payload, err_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        payload = {
                            name: self.file.name,
                            "@microsoft.graph.conflictBehavior": "rename",
                            "@microsoft.graph.sourceUrl": self.uploadSession.url
                        };
                        return [4 /*yield*/, self.client
                                .api(requestUrl)
                                .put(payload)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_3 = _a.sent();
                        throw err_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @static
     * Default path for the file being uploaded
     */
    OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH = "/";
    return OneDriveLargeFileUploadTask;
}(LargeFileUploadTask_1.LargeFileUploadTask));
exports.OneDriveLargeFileUploadTask = OneDriveLargeFileUploadTask;
//# sourceMappingURL=OneDriveLargeFileUploadTask.js.map