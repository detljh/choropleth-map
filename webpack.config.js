const path = require("path");

module.exports = {
    entry: [
      './src/js/index.js',
      './src/index.css'
    ],
    output: {
      path: path.resolve(__dirname, "public/js"),
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
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
  };