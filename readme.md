# gulp-strip-css-comments [![Build Status](https://travis-ci.org/sindresorhus/gulp-strip-css-comments.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-strip-css-comments)

> Strip comments from CSS using [`strip-css-comments`](https://github.com/sindresorhus/strip-css-comments)


## Install

```
$ npm install --save-dev gulp-strip-css-comments
```


## Usage

```js
const gulp = require('gulp');
const stripCssComments = require('gulp-strip-css-comments');

gulp.task('default', () =>
	gulp.src('src/app.css')
		.pipe(stripCssComments())
		.pipe(gulp.dest('dist'))
);
```


## stripCssComments([options])

### options

See the `strip-css-comments` [options](https://github.com/sindresorhus/strip-css-comments#options).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
