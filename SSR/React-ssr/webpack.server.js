const path = require('path')
const nodeExternals = require("webpack-node-externals")
const baseConfig = require('./webpack.base');
const {merge} = require('webpack-merge');
const serverConfig = {
    entry: "./src/server",
    target:"node",
    output:{
        filename:'server.js',
    },
    externals:[nodeExternals(),],
    module:{
        rules:[
            {test:/\.css$/, use:['isomorphic-style-loader',{
                loader: "css-loader",
                options: {
                    modules: true,
                    esModule:false
                  },
            }]},
            {
                test: /\.(png|jpe?g|gif)$/i,use:[{
                    loader:'file-loader',
                    options:{
                        name:'images/[name].[hash:5].[ext]',
                        emitFile:false
                    }
                }]
            }
        ]
    }
}
module.exports = merge(baseConfig,serverConfig)