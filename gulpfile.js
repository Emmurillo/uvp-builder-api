var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000,
            NODE_ENV: 'dev',
            db: 'UVP_dev'
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
            db: 'UVP_prod'
        },
        ignore: ['/node_modules/**']
    })
        .on('restart', function(){
            console.log("Restarting...");
        })
});

gulp.task('production', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000,
            NODE_ENV: 'prod',
            db: 'UVP_prod'
        },
        ignore: ['/node_modules/**']
    })
        .on('restart', function(){
            console.log("Restarting...");
        })
});
