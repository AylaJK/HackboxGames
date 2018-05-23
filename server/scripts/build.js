'use strict';

const webpack = require('webpack');
const config = require('../config/webpack.config.prod');

let compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    return console.log(err);
  }
  console.log(JSON.stringify(stats.toJson({}, true)));
});
