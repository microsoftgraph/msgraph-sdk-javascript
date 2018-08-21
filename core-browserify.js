var browserify = require('browserify');
var b = browserify();
b.add('./browser-wrapper.js');
b.external("es6-promise");
b.external("isomorphic-fetch");
b.bundle().pipe(process.stdout);