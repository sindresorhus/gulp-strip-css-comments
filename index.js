'use strict';
const through = require('through2');
const stripCssComments = require('strip-css-comments');
const PluginError = require('plugin-error');

module.exports = options => {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-strip-css-comments', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = Buffer.from(stripCssComments(file.contents.toString(), options));
			this.push(file);
		} catch (err) {
			this.emit('error', new PluginError('gulp-strip-css-comments', err, {fileName: file.path}));
		}

		cb();
	});
};
