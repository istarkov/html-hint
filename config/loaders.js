var autoprefixer = require('autoprefixer');  // eslint-disable-line no-var

module.exports = {
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
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
        /*
        include: [
          path.join(__dirname, '../src'),
        ],
        */
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
