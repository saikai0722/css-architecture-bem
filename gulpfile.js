var gulp = require('gulp'); //gulpを使用する宣言
var sass = require('gulp-sass'); //SASSの使用
var postcss = require('gulp-postcss');
var csscomb = require('gulp-csscomb'); //cssを綺麗に並び替える
var sassGlob = require('gulp-sass-glob'); // Sassの@importにおけるglobを有効にする


gulp.task('sass', function(){
return gulp.src('src/**/*.scss')
    .pipe(sassGlob()) 
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postcss([
        require('autoprefixer')({grid:true}),
    ]))
.pipe(gulp.dest('htdocs/css/'))
.pipe(csscomb());
});

gulp.task('w', function(){
gulp.watch('src/**/*.scss', gulp.series('sass'));
});