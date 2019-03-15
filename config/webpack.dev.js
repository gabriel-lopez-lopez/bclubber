/** 
 * Archivo de configuración Webpack para entornos de desarrollo
 * 
 */


/**
 * Especificar el entorno
 * @see (@link https://webpack.js.org/guides/production/#specify-the-environment)
 *
 * Si no esta definido previamente
 * 
 */
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}
if (!process.env.BABEL_ENV) {
    process.env.BABEL_ENV = process.env.NODE_ENV;
}

//#region Dependencias
const {
    appPaths,
    devMode,
    eslintFormatter,
    HtmlWebpackPlugin,
    MiniCssExtractPlugin,
    OptimizeCssAssetsPlugin,
    resolve,
    postCSSLoader,
    webpack
} = require('./resolve-dependencies');

// Configuración del servidor de desarrollo de Webpack
const devServer = require('./webpack.dev.server.js').init({});
//#endregion Dependencias


/**
 * Rules
 * 
 * Matriz de Reglas que coinciden con las solicitudes cuando se crean módulos. 
 * Estas reglas pueden modificar cómo se crea el módulo. 
 * Pueden aplicarse cargadores al módulo o modificar el analizador.
 *
 */
const rules = [
    // LINTER: JS / JSX
    {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: appPaths.dirSrc,
        use: [
            {
                loader: require.resolve('eslint-loader'),
                options: {
                    formatter: eslintFormatter,
                    eslintPath: require.resolve('eslint'),
                }
            }
        ]
    },

    // JS / JSX
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ]
            }
        }
    },

    // BMP - GIF - ICO - JPEG -JPG - PNG
    {
        test: [/\.(bmp|gif|ico|jpe?g|png)$/],
        loader: require.resolve('url-loader'),
        options: {
            limit: 450,
            name: '[name].[ext]',
            outputPath: appPaths.assets.images,
            publicPath: appPaths.assets.images
        }
    },

    // SVG
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['@svgr/webpack', 'url-loader']
    },

    // FONTS
    {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: require.resolve('url-loader'),
        options: {
            limit: 1400,
            name: '[name].[ext]',
            outputPath: appPaths.assets.fonts,
            publicPath: appPaths.assets.fonts
        }
    },

    // CSS / SASS / SCSS
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
            devMode
                ? 'style-loader'                    // crea nodos de estilo a partir de cadenas JS 
                : MiniCssExtractPlugin.loader,
            'css-loader',                           // convierte CSS en CommonJS 
            postCSSLoader,
            {
                loader: 'sass-loader',              // compila Sass a CSS, utilizando Node Sass de forma predeterminada
                options: {
                    indentWidth: 4,
                    outputStyle: devMode ? 'compact' : 'compressed',
                    sourceComments: devMode ? true : false,
                    sourceMap: true
                }
            }
        ],
        // sideEffects: false
    }
];

module.exports = [

    {
        name: "bclubber-DEV",

        entry: [
            // Polyfills por defecto
            require.resolve('babel-polyfill'),
            // Punto de entrada a la aplicación
            appPaths.dirSrc + '/index'
        ],

        output: {
            filename: 'app.core.[hash:8].js',
            path: appPaths.dirBuild,
            // URL desde la que se sirve la aplicación. Se usa "/" en desarrollo.
            publicPath: '/',
        },

        mode: 'development',
        
        module: {
            // Las exportaciones faltantes mostrarán un error en lugar de una advertencia
            strictExportPresence: true,

            rules
        },

        // Servidor de desarrollo
        devServer: devMode ? devServer : {},

        // @see (@link https://webpack.js.org/configuration/resolve/#resolve)
        resolve,

        plugins: [

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
                }
            }),

            /**
             * Permite habilitar el módulo activo, también conocido como HMR (Hot Module Replacement).
             * @see (@link https://webpack.js.org/plugins/hot-module-replacement-plugin/)
             */
            new webpack.HotModuleReplacementPlugin(),

            /**
             * 
             */
            new MiniCssExtractPlugin({
                filename: 'styles.core.[hash:8].css'
            }),

            /**
             * Resuelve el problema de duplicación de CSS. 
             * Como extract-text-webpack-plugin solo agrupa (fusiona) fragmentos de texto, si se usa para agrupar CSS, 
             * el paquete puede tener entradas duplicadas.
             * @see (@link https://github.com/NMFR/optimize-css-assets-webpack-plugin)
             */
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    safe: true,
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: true
            })

        ]
    },
];