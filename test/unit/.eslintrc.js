module.exports = {
  "env": {
    "browser": true,
    "mocha": true
  },
  "globals": {
    "expect": true,
    "should": true,
    "sinon": true
  },
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.test.conf.js'
      },
    }
  },
};
