"use strict"

var gulp=require('gulp');
var connect=require('gulp-connect');//Runs a local dev server
var open=require('gulp-open'); //Open a URL in a web browser
var browserify=require('browserify');//Bundles JS
var reactify=require('reactify');//Transform React JSX into JS
var source=require('vinyl-source-stream');//Use conventional text stream with GUlp
var concat=require('gulp-concat');//Concatenates file
var lint=require('gulp-eslint');//Lint JS files,including JSX

var config={
          port:9000,
          devBaseURL:'http://localhost',
          paths: {
              html: './src/*.html',
              js: './src/**/*.js',
              images: './src/images/*',
              css: [
                   'node_modules/bootstrap/dist/css/bootstrap.min.css',
                   'node_modules/bootstrap/dist/css/bootstrap.theme.min.css'
              ],
              dist: './dist',
              mainJS: './src/main.js'
          }
}
//Start a local development server
gulp.task('connect',function(){
  connect.server({
          root: ['dist'],
          port: config.port,
          base: config.devBaseURL,
          livereload: true
  });
});

gulp.task('open',['connect'],function(){
     gulp.src('dist/index.html').pipe(open('',{url:config.devBaseURL + ':' + config.port + '/'}));
});
//Migrate html to dist folder
gulp.task('html',function(){
     gulp.src(config.paths.html).pipe(gulp.dest(config.paths.dist)).pipe(connect.reload());
})
//Migrate js to dist folder
gulp.task('js',function(){
     browserify(config.paths.mainJS).transform(reactify).bundle()
     .on('error',console.error.bind(console)).pipe(source('bundle.js'))
     .pipe(gulp.dest(config.paths.dist + '/scripts')).pipe(connect.reload());
});
//Migrate css files of bootstrap to dist folder
gulp.task('css',function(){
     gulp.src(config.paths.css).pipe(concat('bundle.css')).pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint',function(){
     return gulp.src(config.paths.js).pipe(lint({config: 'eslint.config.json'})).pipe(lint.format());
});

//Migrate images to dist folder
gulp.task('images',function(){
      gulp.src(config.paths.images).pipe(gulp.dest(config.paths.dist + '/images'))
      .pipe(connect.reload());

      //publish favicon
      gulp.src('./src/favicon.ico').pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch',function(){
     gulp.watch(config.paths.html,['html']);
     gulp.watch(config.paths.js,['js','lint']);
})

//start executing the task by as given sequence
gulp.task('default',['html','js','css','images','open','watch','lint']);
