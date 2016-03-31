var gulp = require('gulp');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var minify = require('gulp-minify');
var reload = browserSync.reload;

gulp.task('sass', function(){
	gulp.src('stylesheets/scss/main.scss')
		.pipe(sass({
			includePaths: ['stylesheets/scss'],
			outputStyle: 'expanded'
		}))
		.pipe(gulp.dest('stylesheets/.'));
});

gulp.task('serve', function(){
	browserSync.init(['stylesheets/main.css', '*.html', 'js/*.js'], {
		server: {
			baseDir: './'
		}
	});
});

// Combine multiple tasks into one
gulp.task('watch', ['sass', 'serve'], function(){
	gulp.watch(['stylesheets/scss/*.scss'], ['sass']);
});


/* PRODUCTION TASKS
	- Compile SASS, compressed (single line)
	- Replace image paths with production ready versions
*/
gulp.task('buildcss', function(){
	gulp.src('stylesheets/scss/main.scss')
		.pipe(sass({
			includePaths: ['stylesheets/scss'],
			outputStyle: 'compressed'
		}))
		.pipe(gulp.dest('build/.'));
});

gulp.task('default', function () {
	gulp.src('src/**/*.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'));
});


// var gulp = require('gulp');
// var browserSync = require('browser-sync');
// var watch = require('gulp-watch');
// var cssmin = require('gulp-cssmin');
// var rename = require('gulp-rename');
// var sass = require('gulp-sass');
// var replace = require('gulp-replace');
// var minify = require('gulp-minify');
// var uglify = require('gulp-uglify');
// var reload = browserSync.reload;


// gulp.task('sass', function(){
// 	gulp.src('stylesheets/scss/main.scss')
// 		.pipe(sass({
// 			includePaths: ['stylesheets/scss'],
// 			outputStyle: 'expanded'
// 		}))
// 		.pipe(gulp.dest('stylesheets/.'));
// });

// gulp.task('serve', function(){
// 	browserSync.init(['stylesheets/main.css', '*.html', 'js/*.js'], {
// 		server: {
// 			baseDir: './'
// 		}
// 	});
// });

// Combine multiple tasks into one
// gulp.task('watch', ['sass', 'serve'], function(){
// 	gulp.watch(['stylesheets/scss/*.scss'], ['sass']);
// });


// /* PRODUCTION TASKS
// 	- Compile SASS, compressed (single line)
// 	- Replace image paths with production ready versions
// */
// gulp.task('buildcss', function(){
// 	gulp.src('stylesheets/scss/main.scss')
// 		.pipe(sass({
// 			includePaths: ['stylesheets/scss'],
// 			outputStyle: 'compressed'
// 		}))
// 		.pipe(gulp.dest('build/.'));
// });

// gulp.task('default', function () {
// 	gulp.src('src/**/*.css')
// 		.pipe(cssmin())
// 		.pipe(rename({suffix: '.min'}))
// 		.pipe(gulp.dest('dist'));
// });

// gulp.task('uglify', function() {
//   return gulp.src('main.js')
//     // This will output the non-minified version
//     .pipe(gulp.dest('js'))
//     // This will minify and rename to foo.min.js
//     .pipe(uglify())
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(gulp.dest('js/min'));
// });

