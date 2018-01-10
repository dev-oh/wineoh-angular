/**
 * Created by DAY on 1/10/2018.
 */

var gulp = require('gulp');
var server = require('gulp-express');
var exec = require('child_process').exec;

gulp.task('build', function (cb) {
  exec('ng build --prod',{maxBuffer: 1024 * 500}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('start',['build'],cb=>{
  console.log("Building Done");
  console.log("starting server");
  server.run(['app.js']);
});
