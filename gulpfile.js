const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const dist = './release'

gulp.task('build', function () {
	return gulp.src("./scss/hsframework.scss", {
			sourcemaps: true
		})
		//.pipe(plumber())

		.pipe(sass({
			outputStyle: "expanded"
		}).on('error', sass.logError))
		.pipe(gulp.dest(dist))
		.pipe(postcss([autoprefixer(), cssnano({
			mergeRules: false,
			reduceIdents: {
				keyframes: false
			},
			discardUnused: {
				keyframes: false
			}
		})]))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest(dist, {
			sourcemaps: '.'
		}));
})

gulp.task('watch', function () {
	gulp.watch('./scss/**', gulp.series('build'));
});
