import {GraphRequest} from "./GraphRequest"
import {GraphRequestCallback, GraphError} from "./common"

export class ResponseHandler {
  static init(err, res, callback:GraphRequestCallback):void {
      if (res && res.ok) { // 2xx
          callback(null, res.body, res)
      } else { // not OK response
          if (err == null && res.error !== null) // if error was passed to body
              callback(ResponseHandler.ParseError(res), null, res);
          else // pass back error as first param
              callback(ResponseHandler.ParseError(err), null, res)
      }
  }


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
    static ParseError(rawErr):GraphError {
        let errObj; // path to object containing innerError (see above schema)

        if (!('rawResponse' in rawErr)) { // if superagent correctly parsed the JSON
            if (rawErr.response !== undefined && rawErr.response.body !== null && 'error' in rawErr.response.body) { // some 404s don't return an error object
                errObj = rawErr.response.body.error;
            }
        } else {
            // if there was an error parsing the JSON
            // possibly because of http://stackoverflow.com/a/38749510/2517012
            errObj = JSON.parse(rawErr.rawResponse.replace(/^\uFEFF/, '')).error;
        }

        // parse out statusCode
        let statusCode:number;
        if (rawErr.response !== undefined && rawErr.response.status !== undefined) {
            statusCode = rawErr.response.status;
        } else {
            statusCode = rawErr.statusCode;
        }
        
        // if we couldn't find an error obj to parse, just return an object with a status code and date
        if (errObj === undefined) {
            return {
                statusCode,
                code: null,
                message: null,
                requestId: null,
                date: new Date(),
                body: null
            }
        }

        let err:GraphError = {
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