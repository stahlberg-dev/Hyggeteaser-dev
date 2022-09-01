import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

export function getPath(isDev) {
    const buildFolder = isDev ? `../public_dev`: `../public`;
    const srcFolder = `./src`;

    return {
        build: {
            js: `${buildFolder}/js/`,
            css: `${buildFolder}/css/`,
            html: `${buildFolder}/`,
            images: `${buildFolder}/img/`,
            video: `${buildFolder}/video`,
            fonts: `${buildFolder}/fonts/`,
            favicon: `${buildFolder}/favicon/`,
            ico: `${buildFolder}/`,
        },
        src: {
            js: `${srcFolder}/js/app.js`,
            images: `${srcFolder}/img/**/*.+(png|jpg|jpeg|gif|webp)`,
            video: `${srcFolder}/video/**/*.+(mp4|webm|ogv|swf)`,
            scss: `${srcFolder}/scss/style.scss`,
            html: `${srcFolder}/*.html`,
            svg: `${srcFolder}/img/**/*.svg`,
            favicon: `${srcFolder}/favicon/**/*.*`,
            ico: `${srcFolder}/*.ico`,
            svgicons: `${srcFolder}/svgicons/*.svg`,
        },
        watch: {
            js: `${srcFolder}/js/**/*.js`,
            scss: `${srcFolder}/scss/**/*.scss`,
            html: `${srcFolder}/**/*.html`,
            images: `${srcFolder}/img/**/*.+(png|jpg|jpeg|svg|ico|gif|webp)`,
            video: `${srcFolder}/video/**/*.+(mp4|webm|ogv|swf)`,
            favicon: `${srcFolder}/favicon/**/*.*`,
            ico: `${srcFolder}/*.ico`,
        },
        clean: buildFolder,
        buildFolder: buildFolder,
        srcFolder: srcFolder,
        rootFolder: rootFolder,
        ftp: ``
    };
}

