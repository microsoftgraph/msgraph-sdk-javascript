"use strict";
class ResponseHandler {
    static init(err, res, callback) {
        if (res && res.ok) {
            callback(null, res.body, res);
        }
        else {
            if (err == null && res.error !== null)
                callback(ResponseHandler.ParseError(res), null, res);
            else
                callback(ResponseHandler.ParseError(err), null, res);
        }
    }
    static ParseError(rawErr) {
        let errObj;
        if (!('rawResponse' in rawErr)) {
            if (rawErr.response !== undefined && rawErr.response.body !== null && 'error' in rawErr.response.body) {
                errObj = rawErr.response.body.error;
            }
        }
        else {
            errObj = JSON.parse(rawErr.rawResponse.replace(/^\uFEFF/, '')).error;
        }
        let statusCode;
        if (rawErr.response !== undefined && rawErr.response.status !== undefined) {
            statusCode = rawErr.response.status;
        }
        else {
            statusCode = rawErr.statusCode;
        }
        if (errObj === undefined) {
            return {
                statusCode,
                code: null,
                message: null,
                requestId: null,
                date: new Date(),
                body: null
            };
        }
        let err = {
            statusCode,
            code: errObj.code,
            message: errObj.message,
            requestId: errObj.innerError["request-id"],
            date: new Date(errObj.innerError.date),
            body: errObj
        };
        return err;
    }
}
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=ResponseHandler.js.map