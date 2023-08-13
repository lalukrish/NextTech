const path = require('path');

module.exports = {
  // Other configuration options...
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
};
