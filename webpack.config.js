var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  watch: true,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath: './'
  },
  plugins: [new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(__dirname, './src/index.html')
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  }
};