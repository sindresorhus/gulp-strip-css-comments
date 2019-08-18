import {Buffer} from 'node:buffer';
import stripCssComments from 'strip-css-comments';
import {gulpPlugin} from 'gulp-plugin-extras';

export default function gulpStripCssComments(options) {
	return gulpPlugin('gulp-strip-css-comments', file => {
		file.contents = Buffer.from(stripCssComments(file.contents.toString(), options));
		return file;
	});
}
