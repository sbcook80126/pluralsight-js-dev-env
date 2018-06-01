// This file isn't traspiled, so must use CommonJS and ES5

// Register bable to transpile before our tests run.
require('babel-register')();

// Disable webpack features that the Mocha test framework doesn't understand
require.extensions['.css'] = function name() {};  // if mocha sees .css, treat it as an empty function {}
