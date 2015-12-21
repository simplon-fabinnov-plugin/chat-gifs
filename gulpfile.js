'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = ['manifest.json', 'background.js']
var xpiName = 'chatgifs.xpi';

gulp.task('default', function() {
    // placer le code pour la tâche par défaut ici
    //console.log(files, xpiName)
    gulp.src(files)
        .pipe(zip(xpiName))
        .pipe(gulp.dest('.'));
});
