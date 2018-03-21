'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const glob = require('glob');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      plugins: [
        'transform-class-properties',
        'transform-react-jsx',
      ]
    }
  });

  app.import({
    development: 'node_modules/react/umd/react.development.js',
    production: 'node_modules/react/umd/react.production.min.js'
  });

  app.import({
    development: 'node_modules/react-dom/umd/react-dom.development.js',
    production: 'node_modules/react-dom/umd/react-dom.production.min.js'
  });

  app.import('node_modules/@sivakumar-kailasam/react-aria-modal/dist/react-aria-modal.js', {
    using: [{
      transformation: 'amd',
      as: 'react-aria-modal'
    }]
  });

  let shims = glob.sync('vendor/shims/*.js');
  shims.forEach(shim => app.import(shim));

  return app.toTree();
};
