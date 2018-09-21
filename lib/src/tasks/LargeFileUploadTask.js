"use strict";
/**
 * @module LargeFileUploadTask
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Range_1 = require("../Range");
;
/**
 * Class representing LargeFileUploadTask
 */
var LargeFileUploadTask = /** @class */ (function () {
    /**
     * Constructs a LargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task options
     */
    function LargeFileUploadTask(client, file, uploadSession, options) {
        /**
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
     * Parses given range string to the Range instance
     * @param {string[]} ranges - The ranges value
     * @return The range instance
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
     * Updates the expiration date and the next range
     * @param {UploadStatusResponse} response - The response of the upload status
     */
    LargeFileUploadTask.prototype.updateTaskStatus = function (response) {
        var self = this;
        self.uploadSession.expiry = new Date(response.expirationDateTime);
        self.nextRange = self.parseRange(response.nextExpectedRanges);
    };
    /**
     * Gets next range that needs to be uploaded
     * @return The range instance
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
     * Slices the file content to the given range
     * @param {Range} range - The range value
     * @return The sliced ArrayBuffer or Blob
     */
    LargeFileUploadTask.prototype.sliceFile = function (range) {
        var blob = this.file.content.slice(range.minValue, range.maxValue + 1);
        return blob;
    };
    /**
     * @async
     * Uploads file to the server in a sequential order by slicing the file
     * @return The promise resolves to uploaded response
     */
    LargeFileUploadTask.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, nextRange, err, fileSlice, response, err_1;
            return __generator(this, function (_a) {
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
     * @async
     * Uploads given slice to the server
     * @param {ArrayBuffer | Blob | File} fileSlice - The file slice
     * @param {Range} range - The range value
     * @param {number} totalSize - The total size of a complete file
     */
    LargeFileUploadTask.prototype.uploadSlice = function (fileSlice, range, totalSize) {
        return __awaiter(this, void 0, void 0, function () {
            var self, err_2;
            return __generator(this, function (_a) {
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
     * @async
     * Deletes upload session in the server
     * @return The promise resolves to cancelled response
     */
    LargeFileUploadTask.prototype.cancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, err_3;
            return __generator(this, function (_a) {
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
     * @async
     * Gets status for the upload session
     * @return The promise resolves to the status enquiry response
     */
    LargeFileUploadTask.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, response, err_4;
            return __generator(this, function (_a) {
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
     * @async
     * Resumes upload session and continue uploading the file from the last sent range
     * @return The promise resolves to the uploaded response
     */
    LargeFileUploadTask.prototype.resume = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, err_5;
            return __generator(this, function (_a) {
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