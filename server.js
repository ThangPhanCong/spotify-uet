const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);



app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));


app.listen(3000, function (err) {
  if (err) return console.log(err);

  console.log('Spotify-app server is up on port ' + 3000);
});
