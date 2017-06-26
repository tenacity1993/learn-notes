import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages', () => {
  return gulp.src('app/**/*.ejs')  // 嵌套目录也会匹配
  .pipe(gulp.dest('server'))
  .pipe(gulpif(args.watch, livereload()))
})
