import gulp from 'gulp';
import del from 'del'; // delete
import args from './util/args';

gulp.task('clean', () => {
  return del(['server/public', 'server/views']);
})
