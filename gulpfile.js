/* Variables */

const { src, dest, watch } = require('gulp');

// Compilar CSS
const sass = require('gulp-sass')(require('sass'));

// Imagenes
const imagemin = require('gulp-imagemin');

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

function imagenes(done) {
    src('src/img/**/*') // va a revisar los archivos dentro de la carpeta
        .pipe( imagemin({optimizationLevel: 3}) )
        .pipe( dest('build/img') ) // Exportarlo o guardarlo en una ubicación
    done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;