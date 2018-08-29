"use strict";
/**
 * @module BatchResponseContent
 */
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
/**
 * Class that handles BatchResponseContent
 */
var BatchResponseContent = /** @class */ (function () {
    /**
     * Creates the BatchResponseContent instance
     * @param {any} response - The response body returned for batch request from server
     */
    function BatchResponseContent(response) {
        var self = this;
        self.responses = new Map();
        self.update(response);
    }
    BatchResponseContent.prototype.update = function (response) {
        var self = this, nLink = response["@nextLink"];
        if (typeof nLink !== "undefined") {
            self.nextLink = nLink;
        }
        var responses = response.responses;
        for (var i = 0, l = responses.length; i < l; i++) {
            self.responses.set(responses[i].id, self.createResponseObject(responses[i]));
        }
    };
    BatchResponseContent.prototype.createResponseObject = function (responseJSON) {
        var body = responseJSON.body, options = {};
        options.status = responseJSON.status;
        if (responseJSON.statusText !== undefined) {
            options.statusText = responseJSON.statusText;
        }
        options.headers = responseJSON.headers;
        return new Response(body, options);
    };
    /**
     * To get the response of a request for a given request id
     * @param {string} requestId - The request id value
     * @return The response object instance for the particular request
     */
    BatchResponseContent.prototype.getResponseById = function (requestId) {
        return this.responses.get(requestId);
    };
    /**
     * To get all the responses of the batch request
     * @return The array of response object instances
     */
    BatchResponseContent.prototype.getResponses = function () {
        return this.responses;
    };
    /**
     * To get the iterator for the responses
     * @return The Iterable generator for the response objects
     */
    BatchResponseContent.prototype.getResponsesIterator = function () {
        var self, _a, _b, _i, key;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    self = this;
                    _a = [];
                    for (_b in self.responses)
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    key = _a[_i];
                    return [4 /*yield*/, [key, self.responses[key]]];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    return BatchResponseContent;
}());
exports.BatchResponseContent = BatchResponseContent;
//# sourceMappingURL=BatchResponseContent.js.map