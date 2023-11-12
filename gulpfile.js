/* Variables */

const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done ) {
    // Identificar el archivo principal
    
    src('src/scss/app.scss')
        .pipe( sass() )// Compilar sass
        .pipe( dest('build/css') )// Exportarlo o guardarlo en una ubicación

    done();
}

exports.css = css;