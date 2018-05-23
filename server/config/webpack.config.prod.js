'use strict';

const paths = require("./paths");
const path = require("path");
const fs = require("fs");

module.exports = {
  devtool: "source-map",
  entry: paths.appEntry,
  target: "node",
  output: {
    path: paths.appBuild,
    filename: "[name].js",
  },
  externals: fs.readdirSync("node_modules")
    .reduce(function(acc, mod) {
      if (mod === ".bin") {
        return acc;
      }
      acc[mod] = "commonjs " + mod;
      return acc;
    }, {}),
  node: false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: paths.appSrc,
        use: [
          {
            loader: require.resolve("babel-loader"),
          },
          {
            loader: require.resolve("ts-loader"),
          },
        ],
      },
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        use: [
          {
            loader: require.resolve("babel-loader"),
          },
       ],
      },
    ],
  },
  plugins: [
  ],
};
