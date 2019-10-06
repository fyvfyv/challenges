"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const mqpacker = require("css-mqpacker");
const minifycss = require("gulp-csso");
const rename = require("gulp-rename");
const del = require("del");

gulp.task("clean", function(done) {
  return del("public", done);
});

gulp.task("copy:html", function() {
  return gulp.src('q3.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('public'))
})

gulp.task("copy:images", function() {
  return gulp.src('images/*')
    .pipe(gulp.dest('public/images'))
})

gulp.task("copy:css", function() {
  return gulp.src('css/*')
    .pipe(gulp.dest('public/css'))
})

gulp.task("style", function() {
  return gulp
    .src("scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(
      postcss([
        autoprefixer(),
        mqpacker({
          sort: true
        })
      ])
    )
    .pipe(rename("style.css"))
    .pipe(gulp.dest("css/"))
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css/"))
    .pipe(server.stream());
});

// LIVE SERVER

gulp.task("reload", function(done) {
  server.reload();
  done();
});

gulp.task("serve", function(done) {
  server.init({
    server: ".",
    notify: false,
    cors: true,
    ui: false
  });

  gulp.watch("scss/**/*.{scss,sass}", gulp.series("style", "reload"));
  gulp.watch("*.html", gulp.series("reload"));
  done();
});

gulp.task('build', gulp.series('clean', 'style', 'copy:html', 'copy:images', 'copy:css'))
