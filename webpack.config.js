var webpack = require('webpack');
var path = require('path');

module.exports = {
   entry: './main.js',
  
   output: {
   	path: path.join(__dirname, '/'),
	filename: 'index.js'
	},
  
   devServer: {
      inline: true,
   },
  
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
        
            query: {
               presets: ["react", "es2015"]
            }
         },
         { test: /\.css$/, loader: 'style!css!sass' }
      ]
   },
   plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
]
};
