/**
 * Archivo con las rutas de los principales archivos y directorios
 * para su uso en la construcción de empaquetados para los diferentes entornos.
 * 
 */

// Dependencias
const path = require('path');
const fs = require('fs');

// Directorio principal de la aplicación
const appDirectory = fs.realpathSync(process.cwd());

// NODE_PATH
process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter(folder => folder && !path.isAbsolute(folder))
    .map(folder => path.resolve(appDirectory, folder))
    .join(path.delimiter);

// Resuelve una ruta relativa en absoluta con relación al direcotrio principal de la aplicación
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// Archivo package.json
const pkg = resolveApp('package.json');

// Constante que define la ruta principal de los recursos
const path_assets = 'assets';

module.exports = {

    // Rutas para los diferentes tipos de recursos
    assets: {
        // Ruta principal
        root: path_assets,
        // recursos de CSS
        css: path_assets + '/css',
        // recursos de fuentes webs
        fonts: path_assets + '/fonts',
        // Recursos gráficos
        images: path_assets + '/images',
        // recursos de JS
        js: path_assets + '/js',
        // recursos de SVG
        svg: path_assets + '/svg'
    },

    // Directorio principal de la aplicación    
    dirApp: appDirectory,

    // Directorio principal donde se encuentra el código fuente
    dirSrc: resolveApp('src'),

    // Directorio donde se genera la construcción de producción
    dirBuild: resolveApp('build'),

    // Directorio node_modules
    nodeModules: resolveApp('node_modules'),

    // Archivo package.json
    packageJson: pkg

};