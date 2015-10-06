var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

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
            PORT: 8000,
            NODE_ENV: 'prod',
            db: 'heroku_jqt84c4w:31tgc2bj35eooc623psma4ibuf@ds031611.mongolab.com:31611/heroku_jqt84c4w'
        },
        ignore: ['/node_modules/**']
    })
        .on('restart', function(){
            console.log("Restarting...");
        })
});
