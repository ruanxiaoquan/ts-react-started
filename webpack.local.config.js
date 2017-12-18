let path = require("path");
let webpack = require('webpack');
let entry = {

};

entry.vendor = [
    'react',
    'react-dom',
    'antd-mobile'
];

entry.app = [
    "webpack-hot-middleware/client",
    path.resolve(__dirname, "src/index.tsx")
];


module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        chunkFilename: '[chunkhash].js?r=' + Math.random(),
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
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
            },
            {
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        })
    ]

}