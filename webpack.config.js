const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './source/index.js',
    output: {
        path: `${__dirname}/build`,
        filename: 'index.bundled.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader'
                    },
                ],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './source/index.html'
        })
    ]
}
