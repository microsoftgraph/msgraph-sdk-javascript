"use strict";
exports.oDataQueryNames = ["select", "expand", "orderby", "filter", "top", "skip", "skipToken", "count"];
exports.DEFAULT_VERSION = "v1.0";
exports.GRAPH_BASE_URL = "https://graph.microsoft.com/";
exports.oDataQueryNames = exports.oDataQueryNames.concat(exports.oDataQueryNames.map((s) => "$" + s));
//# sourceMappingURL=common.js.map