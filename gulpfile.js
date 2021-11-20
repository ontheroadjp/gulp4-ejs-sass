var gulp = require("gulp");
//var sass = require("gulp-sass");
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require("gulp-autoprefixer");
var ejs = require("gulp-ejs");
var rename = require('gulp-rename');

//gulp.task( "default", function () {
//    gulp.watch( "src/sass/**/*.scss", gulp.series( "sass" ) );
//    gulp.watch( "src/ejs/**/*.ejs", gulp.series( "ejs" ) );
//});
//
// Sass
//gulp.task( "sass", function () {
//    return gulp.src( 'src/sass/**/*.scss' )
//        .pipe( sass().on( 'error', sass.logError ) )
//        .pipe( autoprefixer( {
//            browsers: [ 'last 2 version', 'ie >= 9', 'iOS >= 7', 'Android >= 4.2' ],
//        }))
//        .pipe( gulp.dest( './dist/css' ));
//});

gulp.task( "default", function (done) {
    gulp.watch( "src/sass/**/*.scss", gulp.series( "sass" ) );
    gulp.watch( "src/ejs/**/*.ejs", gulp.series( "ejs" ) );
    done();
});

gulp.task( "sass", function (done) {
    gulp.src( 'src/sass/index.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( autoprefixer( {
            browsers: [ 'last 2 version', 'ie >= 9', 'iOS >= 7', 'Android >= 4.2' ],
        }))
        .pipe( gulp.dest( './dist/css' ));
    done();
});

// EJS (gulp3)
//gulp.task( "ejs", function () {
//    return gulp.src(["src/ejs/**/*.ejs", '!' + "src/ejs/**/_*.ejs"])
//        .pipe(ejs({}, {}, { ext: '.html' }))
//        .pipe( gulp.dest( "./dist" ) );
//});
//
//// EJS (gulp4)
//gulp.task( "ejs", function () {
//    return gulp.src(["src/ejs/**/*.ejs", '!' + "src/ejs/**/_*.ejs"])
//        .pipe(ejs())
//        .pipe(rename({ extname: '.html' }))
//        .pipe( gulp.dest( "./dist" ) );
//});

// EJS (gulp4)
gulp.task( "ejs", function (done) {
    gulp.src(["src/ejs/**/*.ejs", '!' + "src/ejs/**/_*.ejs"])
        .pipe(ejs())
        .pipe(rename({ extname: '.html' }))
        .pipe( gulp.dest( "./dist" ) );
    done();
});

