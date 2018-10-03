"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var GraphRequest_1 = require("./GraphRequest");
var Client = /** @class */ (function () {
    function Client() {
        // specify client defaults
        this.config = {
            debugLogging: false,
            defaultVersion: common_1.DEFAULT_VERSION,
            baseUrl: common_1.GRAPH_BASE_URL
        };
    }
    Client.init = function (clientOptions) {
        var graphClient = new Client();
        for (var key in clientOptions) {
            graphClient.config[key] = clientOptions[key];
        }
        return graphClient;
    };
    /*
     * Entry point for calling api
     */
    Client.prototype.api = function (path) {
        return new GraphRequest_1.GraphRequest(this.config, path);
    };
    return Client;
}());
exports.Client = Client;
__export(require("./GraphRequest"));
__export(require("./common"));
__export(require("./ResponseType"));
__export(require("./ResponseHandler"));
__export(require("./tasks/OneDriveLargeFileUploadTask"));
__export(require("./tasks/PageIterator"));
__export(require("./content/BatchRequestContent"));
__export(require("./content/BatchResponseContent"));
//# sourceMappingURL=index.js.map