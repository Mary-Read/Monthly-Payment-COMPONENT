const path = require('path');

const src = path.join(__dirname, '/client/src/');
const dist = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${src}app.jsx`,
  output: {
    path: dist,
    filename: 'shipping.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: src,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: 'defaults' }],
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [
                  { removeTitle: false },
                ],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
    ],
  },
};
