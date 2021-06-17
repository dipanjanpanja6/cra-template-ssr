const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/bundle.js",
    client: "./src/client.js",
  },
  output: {
    path: path.resolve(__dirname, "public/assets"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
  },
}
