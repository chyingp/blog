/**
 * Created by a on 14-7-8.
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var replace = require('gulp-replace');

gulp.task('default', function() {
	gulp.src('./src/style.scss')
		.pipe(sass({
			style: 'compressed'
		}))
		.pipe(replace(/\$\{\}/, '程序猿小卡'))
		.pipe(gulp.dest('./dist'));

	gulp.src('./src/index.html')
		.pipe(gulp.dest('./dist/index.html'));
});

