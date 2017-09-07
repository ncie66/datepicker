var gulp = require("gulp");
var livereload = require("gulp-livereload");

gulp.task("js", function(){
    gulp.src("./**/*.js").pipe(livereload());
});
gulp.task("html", function(){
    gulp.src("./**/*.html").pipe(livereload());
});

gulp.task("watch", function(){
    livereload.listen();
    gulp.watch("./**/*.js", ["js"]);
    gulp.watch("./**/*.html", ['html']);
});
