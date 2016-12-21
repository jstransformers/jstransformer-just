# jstransformer-just

[JUST](https://github.com/baryshev/just) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-just/master.svg)](https://travis-ci.org/jstransformers/jstransformer-just)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-just/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-just)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-just/master.svg)](http://david-dm.org/jstransformers/jstransformer-just)
[![NPM version](https://img.shields.io/npm/v/jstransformer-just.svg)](https://www.npmjs.org/package/jstransformer-just)

## Installation

    npm install jstransformer-just

## API

```js
var just = require('jstransformer')(require('jstransformer-just'));

just.renderAsync('Hello, <%= name %>!', { name: 'World' }, function (err, data) {
  data.body
  //=> 'Hello, World!'
});
```

## License

MIT
