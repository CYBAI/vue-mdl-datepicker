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
  rules: {
    'no-unused-expressions': 0,
  },
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.test.conf.js'
      },
    }
  },
};
