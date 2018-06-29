"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GraphHelper = (function () {
    function GraphHelper() {
    }
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