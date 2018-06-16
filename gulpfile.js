var gulp = require('gulp');
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var purgeSourcemaps = require('gulp-purge-sourcemaps');
var bundle = require('gulp-bundle-assets');

var inputScss = "./content/scss/**/*.scss"; /*watches sub folders inside sass folder */
var outputCss = "./dist/css";
var inputJs = "./content/js/customs/**/*.js"; /*watches sub folders inside customs script folder folder */
var outputJs = "./dist/js";

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('scss', function () {
  return gulp
    .src(inputScss)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      browsers: ['> 1%']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(outputCss))
    .pipe(purgeSourcemaps())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(cleanCSS({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(outputCss));
});

gulp.task('watch-scss', function () {
  gulp.watch(inputScss, ['scss']);
  gutil.log(process.version);
});

gulp.task('bundleJs', function () {
  return gulp.src('./bundle-config.js')
      .pipe(bundle())
      .pipe(gulp.dest(outputJs));
});

gulp.task('watch-js', function () {
  gulp.watch(inputJs, ['bundleJs']);
  gutil.log(process.version);
});