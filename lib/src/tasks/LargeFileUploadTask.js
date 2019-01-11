"use strict";
/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Range_1 = require("../Range");
;
/**
 * @class
 * Class representing LargeFileUploadTask
 */
var LargeFileUploadTask = /** @class */ (function () {
    /**
     * @constructor
     * Constructs a LargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task options
     * @returns An instance of LargeFileUploadTask
     */
    function LargeFileUploadTask(client, file, uploadSession, options) {
        /**
         * @private
        * Default value for the rangeSize
        */
        this.DEFAULT_FILE_SIZE = 5 * 1024 * 1024;
        var self = this;
        self.client = client;
        self.file = file;
        if (options.rangeSize === undefined) {
            options.rangeSize = self.DEFAULT_FILE_SIZE;
        }
        self.options = options;
        self.uploadSession = uploadSession;
        self.nextRange = new Range_1.Range(0, self.options.rangeSize - 1);
    }
    /**
     * @public
     * Parses given range string to the Range instance
     * @param {string[]} ranges - The ranges value
     * @returns The range instance
     */
    LargeFileUploadTask.prototype.parseRange = function (ranges) {
        var rangeStr = ranges[0];
        if (typeof rangeStr === "undefined" || rangeStr === "") {
            return new Range_1.Range();
        }
        var firstRange = rangeStr.split("-"), minVal = parseInt(firstRange[0]), maxVal = parseInt(firstRange[1]);
        if (Number.isNaN(maxVal)) {
            maxVal = this.file.size - 1;
        }
        return new Range_1.Range(minVal, maxVal);
    };
    /**
     * @public
     * Updates the expiration date and the next range
     * @param {UploadStatusResponse} response - The response of the upload status
     * @returns Nothing
     */
    LargeFileUploadTask.prototype.updateTaskStatus = function (response) {
        var self = this;
        self.uploadSession.expiry = new Date(response.expirationDateTime);
        self.nextRange = self.parseRange(response.nextExpectedRanges);
    };
    /**
     * @public
     * Gets next range that needs to be uploaded
     * @returns The range instance
     */
    LargeFileUploadTask.prototype.getNextRange = function () {
        var self = this;
        if (self.nextRange.minValue === -1) {
            return self.nextRange;
        }
        var minVal = self.nextRange.minValue, maxValue = minVal + self.options.rangeSize - 1;
        if (maxValue >= self.file.size) {
            maxValue = self.file.size - 1;
        }
        return new Range_1.Range(minVal, maxValue);
    };
    /**
     * @public
     * Slices the file content to the given range
     * @param {Range} range - The range value
     * @returns The sliced ArrayBuffer or Blob
     */
    LargeFileUploadTask.prototype.sliceFile = function (range) {
        var blob = this.file.content.slice(range.minValue, range.maxValue + 1);
        return blob;
    };
    /**
     * @public
     * @async
     * Uploads file to the server in a sequential order by slicing the file
     * @returns The promise resolves to uploaded response
     */
    LargeFileUploadTask.prototype.upload = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self, nextRange, err, fileSlice, response, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        _a.label = 2;
                    case 2:
                        if (!true) return [3 /*break*/, 4];
                        nextRange = self.getNextRange();
                        if (nextRange.maxValue === -1) {
                            err = new Error("Task with which you are trying to upload is already completed, Please check for your uploaded file");
                            err.name = "Invalid Session";
                            throw err;
                        }
                        fileSlice = self.sliceFile(nextRange);
                        return [4 /*yield*/, self.uploadSlice(fileSlice, nextRange, self.file.size)];
                    case 3:
                        response = _a.sent();
                        // Upon completion of upload process incase of onedrive, driveItem is returned, which contains id
                        if (response.id !== undefined) {
                            return [2 /*return*/, response];
                        }
                        else {
                            self.updateTaskStatus(response);
                        }
                        return [3 /*break*/, 2];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        throw err_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Uploads given slice to the server
     * @param {ArrayBuffer | Blob | File} fileSlice - The file slice
     * @param {Range} range - The range value
     * @param {number} totalSize - The total size of a complete file
     */
    LargeFileUploadTask.prototype.uploadSlice = function (fileSlice, range, totalSize) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self, err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.client
                                .api(self.uploadSession.url)
                                .headers({
                                "Content-Length": "" + (range.maxValue - range.minValue + 1),
                                "Content-Range": "bytes " + range.minValue + "-" + range.maxValue + "/" + totalSize
                            })
                                .put(fileSlice)];
                    case 2: return [2 /*return*/, _a.sent()];
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
     * @async
     * Deletes upload session in the server
     * @returns The promise resolves to cancelled response
     */
    LargeFileUploadTask.prototype.cancel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self, err_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.client
                                .api(self.uploadSession.url)
                                .delete()];
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
     * @public
     * @async
     * Gets status for the upload session
     * @returns The promise resolves to the status enquiry response
     */
    LargeFileUploadTask.prototype.getStatus = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self, response, err_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.client
                                .api(self.uploadSession.url)
                                .get()];
                    case 2:
                        response = _a.sent();
                        self.updateTaskStatus(response);
                        return [2 /*return*/, response];
                    case 3:
                        err_4 = _a.sent();
                        throw err_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @public
     * @async
     * Resumes upload session and continue uploading the file from the last sent range
     * @returns The promise resolves to the uploaded response
     */
    LargeFileUploadTask.prototype.resume = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self, err_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, self.getStatus()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, self.upload()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        err_5 = _a.sent();
                        throw err_5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return LargeFileUploadTask;
}());
exports.LargeFileUploadTask = LargeFileUploadTask;
//# sourceMappingURL=LargeFileUploadTask.js.map