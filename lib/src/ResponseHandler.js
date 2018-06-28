"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseHandler = (function () {
    function ResponseHandler() {
    }
    ResponseHandler.init = function (res, err, resContents, callback) {
        if (res && res.ok) {
            callback(null, resContents, res);
        }
        else {
            if (err == null && res != null)
                if (resContents != null && resContents.error != null)
                    callback(ResponseHandler.buildGraphErrorFromResponseObject(resContents.error, res.status), null, res);
                else
                    callback(ResponseHandler.defaultGraphError(res.status), null, res);
            else
                callback(ResponseHandler.ParseError(err), null, res);
        }
    };
    ResponseHandler.ParseError = function (rawErr) {
        if (!rawErr) {
            return ResponseHandler.defaultGraphError(-1);
        }
        return ResponseHandler.buildGraphErrorFromErrorObject(rawErr);
    };
    ResponseHandler.defaultGraphError = function (statusCode) {
        return {
            statusCode: statusCode,
            code: null,
            message: null,
            requestId: null,
            date: new Date(),
            body: null
        };
    };
    ResponseHandler.buildGraphErrorFromErrorObject = function (errObj) {
        var error = ResponseHandler.defaultGraphError(-1);
        error.body = errObj.toString();
        error.message = errObj.message;
        error.date = new Date();
        return error;
    };
    ResponseHandler.buildGraphErrorFromResponseObject = function (errObj, statusCode) {
        return {
            statusCode: statusCode,
            code: errObj.code,
            message: errObj.message,
            requestId: errObj.innerError["request-id"],
            date: new Date(errObj.innerError.date),
            body: errObj
        };
    };
    return ResponseHandler;
}());
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=ResponseHandler.js.map