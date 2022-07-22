const path = require('path');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const clientConfig = {
    devtool: 'source-map',
    entry: "./src/client",
    output: {
        filename: 'js/bundle.[hash:5].js',
        path: path.resolve(__dirname, './public'),
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*','!favicon.ico']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.[hash:5].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {
                        modules: true,
                      },
                }]
            },
            {
                test:  /\.(png|jpe?g|gif)$/i,use:[{
                    loader:'file-loader',
                    options:{
                        name:'images/[name].[hash:5].[ext]'
                    }
                }]
            }
        ]
    }

}
module.exports = merge(baseConfig, clientConfig)