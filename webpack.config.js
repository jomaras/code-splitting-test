const path = require("path");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env = {}) => {
    const baseConfig = {
        devtool:'source-map',
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "ts-loader" },
                { test: /\.css/, loaders: ['style-loader', 'css-loader']},
                { test: /\.html$/, loader: 'html-loader'},
                { test: /\.scss/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            ]
        },
        resolve:{
            extensions:[".js", ".ts", ".tsx"],
        },
        plugins: [
            //new BundleAnalyzerPlugin(),
            new HtmlWebpackPlugin({
                filename: './../../index.html',
                template: './src/index.html'
            })
        ],
        devServer: {
            contentBase: "./bin"
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    };

    const webConfig = Object.assign({}, baseConfig, {
        entry:{
            polyfills: path.join(__dirname, "/src/ts/polyfills"),
            app: path.join(__dirname, "/src/ts/main"),
        },
        output:{
            path: path.join(__dirname, "/bin/js"),
            filename: "[name].js",
            chunkFilename: "[name].chunk.js",
            publicPath: "/bin/js/"
        }
    });

    return [webConfig];
}