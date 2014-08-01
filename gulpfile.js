"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var options = {};

options.sass = {
  errLogToConsole: true,
  includePaths: [
    "./bower_components/bootcamp/dist"
  ]
};

gulp.task("stylesheets", function() {
  gulp.src("./scss/*.scss")
    .pipe(sass(options.sass))
    .pipe(gulp.dest("./css"));
});

gulp.task("default", function() {
  // place code for your default task here
});
