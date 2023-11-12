/* Variables */

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done ) {
    // Identificar el archivo principal
    
    src('src/scss/app.scss')
        .pipe( sass() )// Compilar sass
        .pipe( dest('build/css') )// Exportarlo o guardarlo en una ubicación

    done();
}

function dev() {
    watch('src/scss/**/*.scss', css); // va a revisar los cambios en los diferentes archivos y carpetas
}

exports.css = css;
exports.dev = dev;