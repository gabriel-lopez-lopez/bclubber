/** 
 * Archivo donde se cargan todas las dependencias necesarias para las construcciones con Webpack
 * 
 */

//#region Dependencias
// Dependencias
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

// Webpack Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpackMerge = require('webpack-merge');
//#endregion Dependencias

// Modo desarrollo
const devMode = process.env.NODE_ENV !== 'production';

// Configuración de rutas de directorios y archivos
const appPaths = require('./paths');

// Impide que se importen archivos desde fuera de src/ (o node_modules/)
const ModuleScopePlugin = require('./libs/module.scope');

// Habilita HTTPS si la variable de entorno HTTPS se ha establecido a verdadero
const https = process.env.HTTPS === 'true' ? true : false;
const host = process.env.HOST || 'localhost';
const port = 3000;

/**
 * El cargador "postcss-loader" aplica el autoprefixer a nuestro CSS.
 * El cargador "css-loader" resuelve las rutas en CSS y agrega los recursos como dependencias.
 * El cargador de "style-loader" convierte CSS en módulos JS que inyectan etiquetas <style>.
 * En producción, utilizamos un complemento para extraer ese CSS a un archivo, pero
 * en el cargador de "style-loader" en desarrollo habilita la edición en caliente de CSS.
 *
 */
const postCSSLoader = {
    loader: require.resolve('postcss-loader'),
    options: {
        plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React no soporta IE8 en ningún caso
                ],
                flexbox: 'no-2009'
            }),
        ]
    }
};

/**
 * Resolve
 * 
 * @see (@link https://webpack.js.org/configuration/resolve/#resolve)
 * 
 */
const resolve = {

    // Alternativa para donde Webpack debe buscar módulos.
    // Colocamos estas rutas en segundo lugar porque queremos `node_modules` primero 
    // para "ganar" si hay algún conflicto. Esto coincide con el mecanismo de resolución de Nodo.
    // @see (@link https://github.com/facebookincubator/create-react-app/issues/253)
    modules: ['node_modules', appPaths.nodeModules],

    // Valores predeterminados razonables soportados por el ecosistema Node.
    // También se incluye JSX como una extensión de nombre de componente común para apoyar
    // algunas herramientas, aunque no se recomienda su uso:
    // @see (@link https://github.com/facebookincubator/create-react-app/issues/290)
    extensions: ['.js', '.json', '.jsx'],

    plugins: [
        // Impide que se importen archivos desde fuera de src/ (o node_modules/).
        // Esto a menudo causa confusión porque solo se procesan archivos dentro de src/ con Babel.
        // Para solucionar esto, se evita que se importen archivos fuera de src/ 
        // Si se desea, se puede vincular los archivos en node_modules/ y dejar que la resolución del módulo se active.
        // Hay que asegúrarse de que los archivos fuente estén compilados, ya que no serán procesados de ninguna manera.
        new ModuleScopePlugin(appPaths.dirSrc),
    ]

};

module.exports = {
    appPaths,
    CleanWebpackPlugin,
    devMode,
    eslintFormatter,
    HtmlWebpackPlugin,
    MiniCssExtractPlugin,
    OptimizeCssAssetsPlugin,
    path,
    postCSSLoader,
    resolve,
    TerserPlugin,
    UglifyJSPlugin,
    webpack,
    webpackMerge
};