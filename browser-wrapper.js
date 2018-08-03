// make MicrosoftGraph globally accessible
// MicrosoftGraph.api() can be called directly
window.MicrosoftGraph = require('./lib/src/index.js');
window.LargeFileUploadTask = require("./lib/src/LargeFileUploadTask.js").LargeFileUploadTask;
