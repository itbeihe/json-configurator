var gulp = require('gulp'),
  //qunit = require('node-qunit-phantomjs');
  qunit = require('gulp-qunit');

gulp.task('test', function(cb) {
  return gulp.src('./tests/core-test.html')
    .pipe(qunit({
    }));
  //qunit('./tests/core-test.html');
});


gulp.task('test1', function(cb) {
  return gulp.src('./tests/ok.html')
    .pipe(qunit({
      'phantomjs-options': ['--ssl-protocol=any']
    }));
  //qunit('./tests/core-test.html');
});


gulp.task('default',['test','test1'], function(){
  console.log('default');
});

gulp.task('build',function(){
  gulp.src('').pipe()
})
