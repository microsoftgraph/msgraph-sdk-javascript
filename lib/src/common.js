"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oDataQueryNames = ["select", "expand", "orderby", "filter", "top", "skip", "skipToken", "count"];
exports.DEFAULT_VERSION = "v1.0";
exports.GRAPH_BASE_URL = "https://graph.microsoft.com/";
/**
 * @constant
 * A package version
 * @NOTE: This should be kept up to date with the version used in package.json.
 * If you are changing this please ensure you are also changing it in package.json.
 */
exports.PACKAGE_VERSION = "1.4.0";
/**
 * @extends
 * support oData params with and without $ prefix
 */
exports.oDataQueryNames = exports.oDataQueryNames.concat(exports.oDataQueryNames.map(function (s) { return "$" + s; }));
//# sourceMappingURL=common.js.map