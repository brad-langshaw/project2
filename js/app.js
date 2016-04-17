var imagedata = require('gulp-data');
.pipe(imagedata(function() {
  return require('./images.json')
   }))
gulp.task('nunjucks', function() {
  nunjucksRender.nunjucks.configure(['app/templates/']);

  return gulp.src('.../**/*.+(html|nunjucks)')
    // Adding data to Nunjucks
    .pipe(imagedata(function() {
      return require('./images.json')
    }))
    .pipe(nunjucksRender())
    .pipe(gulp.dest('../'))
});