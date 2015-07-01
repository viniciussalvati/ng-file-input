var gulp = require('gulp'),
	util = require('gulp-util'),
	ts = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),
	connect = require('gulp-connect');

var tsProject = ts.createProject({
	declarationFiles: true,
	noExternalResolve: true
});

gulp.task('compile', function () {
	gulp.src(['src/*.ts', 'typings/**/*.ts'])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject))
		.pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../src/' }))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', ['compile'], function () {
	gulp.watch(['src/*.ts', 'typings/**/*.ts'], ['compile']);
});

gulp.task('server', function () {
	connect.server({
		root: '.',
		livereload: true
	});
});

gulp.task('default', ['compile', 'watch', 'server']);