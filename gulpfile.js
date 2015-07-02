var gulp = require('gulp'),
	util = require('gulp-util'),
	ts = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),
	connect = require('gulp-connect'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

var tsProject = ts.createProject({
	declarationFiles: true,
	noExternalResolve: true
});

gulp.task('compile', function () {
	return gulp.src(['src/*.ts', 'typings/**/*.ts'])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject))
		.pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../src/' }))
		.pipe(gulp.dest('build'));
});

gulp.task('release', ['compile'], function () {
	return gulp.src('build/*.js')
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulp.dest('dist'));
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