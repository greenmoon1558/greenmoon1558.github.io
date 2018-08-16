import gulp from 'gulp';
import less from 'gulp-less';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import del from 'del';
import imagemin from 'imagemin';
import gulpHtml from 'gulp-html';
import gulpInject from 'gulp-inject';

let paths = {
    styles: {
        src: 'src/styles/*.less',
        dest: 'assets/styles/'
    },
    scripts: {
        src: 'src/scripts/*.js',
        dest: 'assets/scripts/'
    },
    images: {
        src: 'src/images/*.{jpg,jpeg,png,svg}',
        dest: 'assets/images/'
    },
    html: {
        src: 'src/*.html',
        dest: 'assets/'
    }
};

export const clean = () => del(['assets']);

export function styles() {
    return gulp.src(paths.styles.src)
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
    return gulp.src(paths.scripts.src, {
            sourcemaps: true
        })
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

export function html() {
    let sources = gulp.src(['assets/scripts/*.js', 'assets/styles/*.css'], {
        read: false
    });

    return gulp.src('./src/index.html', {
            sourcemaps: true
        })
        .pipe(gulpHtml())
        .pipe(gulpInject(sources, {
            transform: function (filepath) {
                if (filepath.slice(-3) === '.js') {
                    return '<script src="./' + filepath.split("/").slice(2).join("/") + '"></script>';
                }
                if (filepath.slice(-4) === '.css') {
                    return '<link rel="stylesheet" href="./' + filepath.split("/").slice(2).join("/") + '">';
                }
                return inject.transform.apply(inject.transform, arguments);
            }
        }))
        .pipe(gulp.dest(paths.html.dest));
}


// export function images() {
//     return gulp.src(paths.images.src, {
//             sourcemaps: true
//         })
//         .pipe(imagemin())
//         .pipe(gulp.dest(paths.images.dest));
// }
export function images() {
    return gulp.src(paths.images.src, {
            sourcemaps: true
        })
        .pipe(gulp.dest(paths.images.dest));

}

function watchFiles() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.images.src, images);
}

export {
    watchFiles as watch
};

let build = gulp.series(
    clean,
    gulp.parallel(styles, scripts, images),
    html

);

gulp.task('build', build);

export default build;