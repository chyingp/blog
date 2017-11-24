var gulp = require('gulp');
var path = require('path');

// webpack构建生成的文件，同步到这个工程目录下
var svrRoot = '/Users/a/Documents/code/develop/xunjiatong/InquiryHandNodeSvr/branches/2017.11.23-kh-m';

gulp.task('views', function(){  
  let dest = path.join(svrRoot, 'app/view/kh-m');
  return gulp.src(['src-dy/page/*.html', 'src-dy/page/*.ejs'])
    .pipe(gulp.dest(dest));
});

gulp.task('public', function(){
  let dest = path.join(svrRoot, 'app/public/kh-m');  
  return gulp.src(['build/**/*.js', 'build/**/*.json'])
    .pipe(gulp.dest(dest));
});

gulp.task('default', [ 'views', 'public' ]);