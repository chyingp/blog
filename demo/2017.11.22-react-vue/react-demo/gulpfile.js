var gulp = require('gulp');
var path = require('path');

var svrRoot = '/Users/a/Documents/code/develop/xunjiatong/InquiryHandNodeSvr/branches/2017.11.23-kh-m';

gulp.task('views', function(){  
  let dest = path.join(svrRoot, 'app/view/kh-m');
  return gulp.src(['page/*.html', 'page/*.ejs'])
    .pipe(gulp.dest(dest));
});

gulp.task('public', function(){
  let dest = path.join(svrRoot, 'app/public/kh-m');  
  return gulp.src('build/*.js')
    .pipe(gulp.dest(dest));
});

gulp.task('default', [ 'views', 'public' ]);