//Konfiguracja Webpack
var path = require("path");

module.exports = {
    entry:"./js/main.jsx",
    output: { filename: "out.js", path: path.resolve(__dirname, "js") },
    mode: "development",
    watch: true,
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                }
            }
        }, {
            test: /\.(png|svg|jpe?g|gif|eot|ttf|woff|woff2)$/,
            loader: 'url-loader'
        }, {
            test: /\.scss$/,
            include: __dirname,
            loaders: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"]
        }]
    }
};