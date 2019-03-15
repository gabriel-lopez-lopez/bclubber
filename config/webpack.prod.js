/** 
 * Archivo de configuración Webpack para entornos de producción
 * 
 */


/**
 * Especificar el entorno de producción
 * @see (@link https://webpack.js.org/guides/production/#specify-the-environment)
 * 
 */
process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

//#region Dependencias
const {
    appPaths,
    CleanWebpackPlugin,
    HtmlWebpackPlugin,
    MiniCssExtractPlugin,
    OptimizeCssAssetsPlugin,
    TerserPlugin,
    UglifyJSPlugin,
    webpackMerge
} = require('./resolve-dependencies');

// Configuración para entornos de desarrollo para Webpack
const webpackConfigDevelopment = require('./webpack.dev');
//#endregion Dependencias

module.exports = webpackMerge.strategy({
    /**
	 * Elimina la configuración plugins del entorno de desarrollo y sólo aplica la de producción
	 * @see (@link https://github.com/survivejs/webpack-merge#mergesmartstrategy-key-prependappendreplaceconfiguration-configuration)
	 */
    plugins: 'replace'
})(webpackConfigDevelopment.concat(

    {
        name: "bclubber-PRO",

        output: {
            filename: 'app.core.[hash:8].js',
            path: appPaths.dirBuild,
            publicPath: '',
        },

        mode: 'production',

        /**
         * UglifyJSPlugin tiene problemas con las úñtimas versiones de React Hook
         * Mejor usar terser
         * @see (@link https://github.com/terser-js/terser)
         */
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            html5_comments: false,
                        },
                        compress: {
                            drop_console: true,
                            drop_debugger: true
                        },
                        output: {
                            comments: false,
                            beautify: false,
                            // Activo porque emoji y regex no se minimizan correctamente usando el valor predeterminado
                            // @see (@link https://github.com/facebookincubator/create-react-app/issues/2488)
                            ascii_only: true
                        }
                    }
                })
            ]
        },

        plugins: [

            /**
             * Limpia el directorio final de la construcción.
             * Es una buena práctica limpiar el directorio final de la construcción
             * antes de cada compilación, de modo que solo almacenará los archivos usados. 
             * @see (@link https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder)
             */
            new CleanWebpackPlugin(appPaths.dirBuild, { root: process.cwd() }),

            /**
             * Creación de archivos HTML para servir los archivos empaquetados por webpack.
             * @see (@link https://webpack.js.org/plugins/html-webpack-plugin/)
             */
            new HtmlWebpackPlugin({
                favicon: appPaths.dirSrc + '/favicon.ico',
                template: appPaths.dirSrc + '/index.html',
                /**
                 * Inyecta la etiqueta meta.
                 * Para la plantilla predeterminada, html-webpack-plugin ya 
                 * proporciona un valor predeterminado para la etiqueta meta
                 * de la ventana gráfica.
                 *
                 * Una lista bien mantenida de casi todas las metaetiquetas posibles.
                 * @see (@link https://github.com/joshbuchea/HEAD#meta)
                 *
                 */
                meta: {
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                },
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                },
            }),

            /**
             * Resuelve el problema de duplicación de CSS. 
             * Como extract-text-webpack-plugin solo agrupa (fusiona) fragmentos de texto, si se usa para agrupar CSS, 
             * el paquete puede tener entradas duplicadas.
                 * @see (@link https://github.com/NMFR/optimize-css-assets-webpack-plugin)
             */
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
                canPrint: true
            }),

            new MiniCssExtractPlugin({
                filename: 'styles.core.[hash:8].css',
                path: appPaths.dirBuild
            }),

            // /**
            //  * Minimizar JavaScript
            //  * @see (@link https://webpack.js.org/plugins/uglifyjs-webpack-plugin/) 
            //  */
            // new UglifyJSPlugin({
            //     exclude: /node_modules/,
            //     uglifyOptions: {
            //         compress: {
            //             drop_console: true,
            //             drop_debugger: true
            //         },
            //         output: {
            //             comments: false,
            //             beautify: false,
            //             // Activo porque emoji y regex no se minimizan correctamente usando el valor predeterminado
            //             // @see (@link https://github.com/facebookincubator/create-react-app/issues/2488)
            //             ascii_only: true
            //         }
            //     }
            // })

        ]
    }

));