"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oDataQueryNames = ["select", "expand", "orderby", "filter", "top", "skip", "skipToken", "count"];
exports.DEFAULT_VERSION = "v1.0";
exports.GRAPH_BASE_URL = "https://graph.microsoft.com/";
exports.oDataQueryNames = exports.oDataQueryNames.concat(exports.oDataQueryNames.map(function (s) { return "$" + s; }));
//# sourceMappingURL=common.js.map