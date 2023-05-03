var gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
	return gulp.src('app/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('sass', 'watch'));