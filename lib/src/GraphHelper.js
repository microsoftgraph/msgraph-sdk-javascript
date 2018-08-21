"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GraphHelper = /** @class */ (function () {
    function GraphHelper() {
    }
    /*
        This conversion is required due to the following reasons:
            1. Body parameter of Request method of isomorphic-fetch only accepts Blob, ArrayBuffer, FormData, TypedArrays, string.
            2. Node.js platform does not suppport Blob, FormData. Javascript File object inherits from Blob so it is also
                not supported in node. Therefore content of type Blob, File, FormData will only come from browsers.
            3. Parallel to Javascript's arrayBuffer, node provides Buffer interface. Node's Buffer is able to send the arbitary
                binary data to the server successfully for both Browser and Node platform. Whereas sending binary data via
                ArrayBuffer or TypedArrays was only possible using Browser. To support both Node and Browser, `serializeContent`
                converts TypedArrays or ArrayBuffer to `Node Buffer`.
            4. If the data received is in JSON format, `serializeContent` converts the JSON to string.
    */
    GraphHelper.serializeContent = function (content) {
        var className = content.constructor.name;
        if (className === 'Buffer'
            || className === 'Blob'
            || className === 'File'
            || className === 'FormData'
            || typeof content === 'string') {
            return content;
        }
        if (className === 'ArrayBuffer') {
            content = Buffer.from(content);
        }
        else if (className === 'Int8Array'
            || className === 'Int16Array'
            || className === 'Int32Array'
            || className === 'Uint8Array'
            || className === 'Uint16Array'
            || className === 'Uint32Array'
            || className === 'Uint8ClampedArray'
            || className === 'Float32Array'
            || className === 'Float64Array'
            || className === 'DataView') {
            content = Buffer.from(content.buffer);
        }
        else {
            try {
                content = JSON.stringify(content);
            }
            catch (error) {
                console.log(error);
                throw new Error('Invalid JSON content');
            }
        }
        return content;
    };
    return GraphHelper;
}());
exports.GraphHelper = GraphHelper;
//# sourceMappingURL=GraphHelper.js.map