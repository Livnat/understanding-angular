module.exports = {

  // set the context (optional)
  context: __dirname + '/src',
  entry: './index.js',

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: [__dirname + "/src"]
  },

  module: {
    loaders: [
      // load and compile javascript and less
      { test: /\.js$/, exclude: /node_modules/, loader:"babel" }
    ]
  },

  // webpack dev server configuration
  devServer: {
    contentBase: "./src",
    noInfo: false,
    hot: true
  },

  // support source maps
  devtool: "#inline-source-map"
};
