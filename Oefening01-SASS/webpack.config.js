const path = require('path');

// webpack.config.js 
module.exports = { 
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'main.js'
  },
  module: { 
    rules: [{ 
      test: /\.scss$/, 
        use: [ 
        "style-loader", // creates style nodes from JS strings 
        "css-loader", // translates CSS into CommonJS 
        "sass-loader" // compiles Sass to CSS, using Node Sass 
       ] 
    }] 
  } 
};
