// make MicrosoftGraph globally accessible
// MicrosoftGraph.api() can be called directly
window.MicrosoftGraph = require('./lib/src/index.js');
Object.assign(window, require("./lib/src/LargeFileUploadTask.js"));
