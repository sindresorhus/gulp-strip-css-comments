'use strict';
var test = require('ava');
var gutil = require('gulp-util');
var stripCssComments = require('./');

test(function (t) {
	var stream = stripCssComments();

	stream.once('data', function (file) {
		t.assert(file.contents.toString() === 'body{}');
	});

	stream.on('end', t.end);

	stream.write(new gutil.File({
		contents: new Buffer('body{/**/}')
	}));
});
