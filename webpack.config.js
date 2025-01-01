// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/TailNextEditor.js',
  output: {
    filename: 'TailNextEditor.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'TailNextEditor',
    libraryTarget: 'umd',  // Universal Module Definition (can be used in any module system)
    globalObject: 'this',  // For compatibility with Node.js and browsers
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'react', // Exclude React from the bundle
    'react-dom': 'react-dom', // Exclude ReactDOM from the bundle
  },
};
