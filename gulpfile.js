"use strict";
let gulp = require("gulp");
let rename = require("gulp-rename");
let html_min = require("gulp-htmlmin");
let replace = require("gulp-replace");
let typescript = require("gulp-typescript");

gulp.task("html", function () {
    return gulp.src("src/*.html")
        .pipe(html_min({
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
            removeComments: true,
            decodeEntities: true
        }))
        .pipe(replace(/[\r\n] */g, ""))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["html"], function () {
    gulp.watch('template/*.html', ["html"]);
});
