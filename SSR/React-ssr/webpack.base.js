const path = require('path')
module.exports = {
    mode: 'development',
    target:"node",
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"src")
        },
        extensions:[".js",".jsx",".css"]
    },
    watch:true,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude:/node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-react"]
                        }
                    }
                ]
            }
        ]
    }
}