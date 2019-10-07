// webpack.config.js 
module.exports = { 
  entry: { main: './src/index.js' },
  output: {
    filename: '../wwwroot/main.js'
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
