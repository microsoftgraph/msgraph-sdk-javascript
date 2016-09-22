var browserify = require('browserify');
var b = browserify();
b.add('./browser-wrapper.js');
b.bundle().pipe(process.stdout);