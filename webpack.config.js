const cldr = require('cldr');

const localeIdList = cldr.localeIds;
const delimiterList = localeIdList.map((localeId)=> {
  const delimiter = cldr.extractDelimiters(localeId);
  return { localeId, delimiter }
});

module.exports = {
  entry    : [
    './src/index.js'
  ],
  output   : {
    path      : __dirname,
    publicPath: '/',
    filename  : 'bundle.js'
  },
  module   : {
    loaders: [{
      exclude: /node_modules/,
      loader : 'babel'
    }]
  },
  resolve  : {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase       : './',
    proxy             : {
      '/api/delimiters/': {
        bypass: function(req, res) {
          return res.json([...delimiterList])
        }
      }
    }
  }
};
