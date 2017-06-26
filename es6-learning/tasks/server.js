import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb) => {
  if(!args.watch) return cb();  // 是否处于监听状态下
// 创建服务器                 在当前目录下执行脚本    脚本
  var server = liveserver.new(['--harmony', 'server/bin/www']);
  server.start();

  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'],function(file){
    server.notify.apply(server, [file]);
  })

  gulp.watch(['server/routes/**/*.js', 'server/app.js'], function(){
    server.start.bind(server)()
  });
})
