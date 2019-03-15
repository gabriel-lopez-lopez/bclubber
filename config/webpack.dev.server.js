/** 
 * Archivo de configuración para el servidor de desarrollo de Webpack
 * 
 */

// Dependencias
const path = require('path');

// Habilita HTTPS si la variable de entorno HTTPS se ha establecido a verdadero
const https = process.env.HTTPS || process.env.HTTPS === 'true' ? true : false;
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 9002;

// Configuración Servidor de desarrollo
let devServer = {
    https,
    host,
    port,
    // Para que las rutas sean del tipo http://localhost:8080/ruta y no http://localhost:8080/#/ruta
    historyApiFallback: true, // verdadero para indext.html sobre 404. Objeto para múltiples rutas
    compress: true,
    stats: 'minimal',

    // HMR (Hot Module Replacement). Depende de webpack.HotModuleReplacementPlugin
    hot: true,

    // Habilita que el servidor de desarrollo abra el navegador 
    open: true,

    // URL desde la que se sirve la aplicación. Se usa "/" en desarrollo.
    publicPath: '/',

    // Webpack utiliza el sistema de archivos para recibir notificaciones de cambios de archivos
    watchOptions: {
        ignored: [
            '/node_modules/'
        ],
        watch: true
    }

};

/**
 * Devuelve la configuración del servidor de desarrollo de Webpack
 * 
 * @param {Object} [appPaths] Directorios de la aplicación
 * @param {Object} [config] Configuración para webpackDevServer a mergear 
 * 							con la configuración por defecto
 * @returns {Object} Configuracion de webpackDevServer
 */
function init({ appPaths, config }) {
    devServer = Object.assign({}, devServer, config);
    if (appPaths) {
        devServer.watchOptions.ignored.push(
            path.resolve(appPaths.dirApp + '/node_modules/')
        )
    }
    return devServer;
}

module.exports = {
    init
};