var autoprefixer = require('autoprefixer');  // eslint-disable-line no-var
const webpack = require('webpack');

const envObj = Object.keys(process.env)
  .reduce((r, k) => Object.assign({}, r, {
    [k]: JSON.stringify(process.env[k]),
  }), {});

module.exports = {
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': envObj,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:5]',
          'postcss-loader',
          `sass-loader?precision=10&indentedSyntax=sass`,
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        loaders: ['url-loader?limit=7000'],
      },
      {
        test: /\.md$/,
        loaders: ['raw-loader'],
      },
    ],
  },
};
