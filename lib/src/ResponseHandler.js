"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseHandler = /** @class */ (function () {
    function ResponseHandler() {
    }
    ResponseHandler.init = function (res, err, resContents, callback) {
        if (res && res.ok) { // 2xx
            callback(null, resContents, res);
        }
        else { // not OK response
            if (err == null && res != null)
                if (resContents != null && resContents.error != null) // if error was passed to body
                    callback(ResponseHandler.buildGraphErrorFromResponseObject(resContents.error, res.status), null, res);
                else
                    callback(ResponseHandler.defaultGraphError(res.status), null, res);
            else // pass back error as first param
                callback(ResponseHandler.ParseError(err), null, res);
        }
    };
    /*
        Example error for https://graph.microsoft.com/v1.0/me/events?$top=3&$search=foo
        {
            "error": {
                "code": "SearchEvents",
                "message": "The parameter $search is not currently supported on the Events resource.",
                "innerError": {
                    "request-id": "b31c83fd-944c-4663-aa50-5d9ceb367e19",
                    "date": "2016-11-17T18:37:45"
                }
            }
        }
    */
    ResponseHandler.ParseError = function (rawErr) {
        // if we couldn't find an error obj to parse, just return an object with a status code and date
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
            requestId: (errObj.innerError !== undefined) ? errObj.innerError["request-id"] : "",
            date: (errObj.innerError !== undefined) ? new Date(errObj.innerError.date) : new Date(),
            body: errObj
        };
    };
    return ResponseHandler;
}());
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=ResponseHandler.js.map