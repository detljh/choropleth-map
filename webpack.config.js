const path = require("path");

module.exports = {
    mode: 'development',
    entry: [
      './src/js/index.js',
      './src/css/index.css'
    ],
    output: {
      path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        }
      ]
    }
  };