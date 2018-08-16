const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log("dm dirname:", __dirname)
module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './app.js',
  output: {
    filename: "bundle.js",
    publicPath: '/',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/app.html',
      myid: 'root',
      filename: './app.html'
    })
  ],
}