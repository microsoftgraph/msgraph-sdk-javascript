"use strict";
/**
 * @module OneDriveLargeFileUploadTask
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var LargeFileUploadTask_1 = require("./LargeFileUploadTask");
var OneDriveLargeFileUploadTaskUtil_1 = require("./OneDriveLargeFileUploadTaskUtil");
;
/**
 * Class representing OneDriveLargeFileUploadTask
 */
var OneDriveLargeFileUploadTask = /** @class */ (function (_super) {
    __extends(OneDriveLargeFileUploadTask, _super);
    /**
     * Constructs a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task options
     */
    function OneDriveLargeFileUploadTask(client, file, uploadSession, options) {
        return _super.call(this, client, file, uploadSession, options) || this;
    }
    /**
     * @static
     * @async
     * Creates a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {Blob | Buffer | File} file - File represented as Blob, Buffer or File
     * @param {OneDriveLargeFileUploadOptions} options - The options for upload task
     * @return The promise that will be resolves to OneDriveLargeFileUploadTask instance
     */
    OneDriveLargeFileUploadTask.create = function (client, file, options) {
        return __awaiter(this, void 0, void 0, function () {
            var fileObj, _file, b, requestUrl, session, rangeSize, err_1;
            return __generator(this, function (_a) {
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
     * @static
     * Constructs the create session url for Onedrive
     * @param {string} fileName - The name of the file
     * @param {path} [path = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH] - The path for the upload
     * @return The constructed create session url
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
     * @static
     * @async
     * Makes request to the server to create an upload session
     * @param {Client} client - The GraphClient instance
     * @param {string} requestUrl - The URL to create the upload session
     * @param {string} fileName - The name of a file to upload, (with extension)
     * @return The promise that resolves to LargeFileUploadSession
     */
    OneDriveLargeFileUploadTask.createUploadSession = function (client, requestUrl, fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, session, err_2;
            return __generator(this, function (_a) {
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
                        session = _a.sent();
                        return [2 /*return*/, {
                                url: session.uploadUrl,
                                expiry: new Date(session.expirationDateTime)
                            }];
                    case 3:
                        err_2 = _a.sent();
                        throw err_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Commits upload session to end uploading
     * @param {string} requestUrl - The URL to commit the upload session
     * @return The promise resolves to committed response
     */
    OneDriveLargeFileUploadTask.prototype.commit = function (requestUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var self, payload, err_3;
            return __generator(this, function (_a) {
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
     * Default path for the file being uploaded
     */
    OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH = "/";
    return OneDriveLargeFileUploadTask;
}(LargeFileUploadTask_1.LargeFileUploadTask));
exports.OneDriveLargeFileUploadTask = OneDriveLargeFileUploadTask;
//# sourceMappingURL=OneDriveLargeFileUploadTask.js.map