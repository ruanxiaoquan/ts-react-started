let path = require("path");
let webpack = require('webpack');
let entry = {};
entry.vendor = [
    'react',
    'react-dom',
    'antd-mobile'
];
entry.app = [
    "./src/index.tsx"
];
module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, "./build/"),
        chunkFilename: '[chunkhash].js?r=' + Math.random(),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['ts-loader'], include: path.resolve('src') }
            , {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
            , {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        })
    ]

}