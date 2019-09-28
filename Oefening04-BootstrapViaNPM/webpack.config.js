const path = require('path');

// webpack.config.js 
module.exports = { 
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'main.js'
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
  }
};
