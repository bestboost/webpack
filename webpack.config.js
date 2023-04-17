const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
     mode: 'development',
     entry: './src/index.js',
     output: {
          path: path.resolve(__dirname, 'build'),
          filename: 'my-bundle.js',
     },
     module: {
          rules: [
               {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 
                    // MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'],
                  },
                  {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                  },
          ],
     },
     plugins: [new HtmlWebpackPlugin({template: 'src/index.html'}),
     // new MiniCssExtractPlugin({filename: 'style.css'}),
     new CleanWebpackPlugin(),
],
    
     devServer: {
          port: 4444,
          open: true,
          stats: 'errors-only',
     },
};  