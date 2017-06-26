import gulp from 'gulp';
import gulpif from 'gulp-if'; // gulp语句中做if判断
import concat from 'gulp-concat';// gulp中处理文件拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';// 对文件重命名做标志
import livereload from 'gulp-livereload'; //浏览器自动刷新功能 热更新
import plumber from 'gulp-plumber';// 处理文件信息流
import rename from 'gulp-rename'; //文件重命名
import uglify from 'gulp-uglify';//css js 压缩
import {log, colors} from 'gulp-util'; //
import args from './util/args.js';


gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())  // 对文件重新命名
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }), null, (err, stats) => {
      log(`Finished '${color.cyan('scripts')}'`, stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false}, output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch, livereload()))
})
