var gulp = require('gulp'),
	util = require('gulp-util'),
	ts = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject({
	declarationFiles: true,
	noExternalResolve: true
});

gulp.task('compile', function () {
	gulp.src(['src/*.ts', 'typings/**/*.ts'])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject))
		.pipe(sourcemaps.write('.', { addComment: false, includeContent: false, sourceRoot: '../src/' }))
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['compile']);