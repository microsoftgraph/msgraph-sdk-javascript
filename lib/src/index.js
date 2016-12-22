"use strict";
const common_1 = require("./common");
const GraphRequest_1 = require("./GraphRequest");
class Client {
    constructor() {
        this.config = {
            debugLogging: false,
            defaultVersion: common_1.DEFAULT_VERSION,
            baseUrl: common_1.GRAPH_BASE_URL
        };
    }
    static init(clientOptions) {
        var graphClient = new Client();
        for (let key in clientOptions) {
            graphClient.config[key] = clientOptions[key];
        }
        return graphClient;
    }
    api(path) {
        return new GraphRequest_1.GraphRequest(this.config, path);
    }
}
exports.Client = Client;
//# sourceMappingURL=index.js.map