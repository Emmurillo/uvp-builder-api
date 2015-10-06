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
            db: 'pernix:Pernix123.@ds029814.mongolab.com:29814/uvp_builder'
        },
        ignore: ['/node_modules/**']
    })
        .on('restart', function(){
            console.log("Restarting...");
        })
});
