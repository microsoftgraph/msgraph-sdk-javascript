"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseHandler = (function () {
    function ResponseHandler() {
    }
    ResponseHandler.init = function (err, res, callback) {
        if (res && res.ok) {
            callback(null, res.body, res);
        }
        else {
            if (err == null && res.error !== null)
                callback(ResponseHandler.ParseError(res), null, res);
            else
                callback(ResponseHandler.ParseError(err), null, res);
        }
    };
    ResponseHandler.ParseError = function (rawErr) {
        var errObj;
        if (!('rawResponse' in rawErr)) {
            if (rawErr.response !== undefined && rawErr.response.body !== null && 'error' in rawErr.response.body) {
                errObj = rawErr.response.body.error;
            }
        }
        else {
            errObj = JSON.parse(rawErr.rawResponse.replace(/^\uFEFF/, '')).error;
        }
        var statusCode;
        if (rawErr.response !== undefined && rawErr.response.status !== undefined) {
            statusCode = rawErr.response.status;
        }
        else {
            statusCode = rawErr.statusCode;
        }
        if (errObj === undefined) {
            return {
                statusCode: statusCode,
                code: null,
                message: null,
                requestId: null,
                date: new Date(),
                body: null
            };
        }
        var err = {
            statusCode: statusCode,
            code: errObj.code,
            message: errObj.message,
            requestId: errObj.innerError["request-id"],
            date: new Date(errObj.innerError.date),
            body: errObj
        };
        return err;
    };
    return ResponseHandler;
}());
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=ResponseHandler.js.map