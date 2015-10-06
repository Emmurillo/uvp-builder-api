var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
    
gulp.task('test', function () {
    return gulp.src('tests/**/*.spec.js')
        .pipe(mocha())
        .once('error', function () {
            process.exit(1);
        })
        .once('end', function () {
            process.exit();
        });
})

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000,
            NODE_ENV: 'dev',
            db: 'localhost/UVP_dev'
        },
        ignore: ['/node_modules/**']
    })
        .on('restart', function(){
            console.log("Restarting...");
        })
});

gulp.task('staging', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000,
            NODE_ENV: 'staging',
            db: 'localhost/UVP_test'
        },
        ignore: ['/node_modules/**']
    })
        .on('restart', function(){
            console.log("Restarting...");
        })
});

gulp.task('prod', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: process.env.PORT || 8000,
            NODE_ENV: 'prod',
            db: process.env.MONGOLAB_URI
        },
        ignore: ['/node_modules/**']
    })
        .on('restart', function(){
            console.log("Restarting...");
        })
});
