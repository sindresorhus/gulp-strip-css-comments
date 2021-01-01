# gulp-strip-css-comments

> Strip comments from CSS using [`strip-css-comments`](https://github.com/sindresorhus/strip-css-comments)


## Install

```
$ npm install --save-dev gulp-strip-css-comments
```


## Usage

```js
const gulp = require('gulp');
const stripCssComments = require('gulp-strip-css-comments');

exports.default = () => (
	gulp.src('src/app.css')
		.pipe(stripCssComments())
		.pipe(gulp.dest('dist'))
);
```


## stripCssComments(options?)

### options

Type: `object`

See the `strip-css-comments` [options](https://github.com/sindresorhus/strip-css-comments#options).
