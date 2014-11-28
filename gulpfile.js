var gulp = require('gulp'),
  //qunit = require('node-qunit-phantomjs');
  qunit = require('gulp-qunit');

gulp.task('test', function(cb) {
  return gulp.src('./tests/core-test.html')
    .pipe(qunit({
      'phantomjs-options': ['--ssl-protocol=any']

    }));
  //qunit('./tests/core-test.html');
});




gulp.task('test2', function(){
  console.log('default');
  qunit('./tests/core-test.html');
});

gulp.task('default',['test','test2'], function(){
  console.log('default');
});
