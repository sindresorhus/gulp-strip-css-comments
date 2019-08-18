'use strict';
const through = require('through2');
const stripCssComments = require('strip-css-comments');
const PluginError = require('plugin-error');

module.exports = options => {
	return through.obj(function (file, encoding, callback) {
		if (file.isNull()) {
			callback(null, file);
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-strip-css-comments', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = Buffer.from(stripCssComments(file.contents.toString(), options));
			this.push(file);
		} catch (error) {
			this.emit('error', new PluginError('gulp-strip-css-comments', error, {fileName: file.path}));
		}

		callback();
	});
};
