var gulp = require('gulp');
var path = require('path');
var conf = require('./release.conf');

var webpackBuildPath = conf.tmp;
var viewSubPath = 'view/kh-m';
var publicSubPath = 'public/kh-m';
var viewPath;
var publicPath;

gulp.task('set-dev', function(cb){    
  viewPath = path.join(conf.devPath, viewSubPath);
  publicPath = path.join(conf.devPath, publicSubPath);
  cb();
});

gulp.task('set-prod', function(cb){  
  viewPath = path.join(conf.prodPath, viewSubPath);
  publicPath = path.join(conf.prodPath, publicSubPath);
  cb();
});

gulp.task('view', function(){  
  let src = ['src/page/**/*.html'];
  let dest = viewPath;
  return gulp.src(src).pipe(gulp.dest(dest));
});

gulp.task('public', function(){
    let src = ['**/*.js', '**/*.json'].map(p => webpackBuildPath + '/' + p);
    let dest = publicPath;
    return gulp.src(src).pipe(gulp.dest(dest));  
});

gulp.task('default', [ 'set-dev', 'view', 'public' ]);
gulp.task('dev', [ 'set-dev', 'view', 'public' ]);
gulp.task('prod', [ 'set-prod', 'view', 'public' ]);
// gulp.task('dev', [ 'view', 'public' ]);
// gulp.task('prod', [ 'view', 'public' ]);