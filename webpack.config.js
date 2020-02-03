const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
      index: './src/js/index.js',
      d3: './src/js/d3.js'
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "static/js/[name].bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Choropleth Map',
        template: 'public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src/js"),
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "src/css"),
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader"
          ]
        }
      ]
    }
  };