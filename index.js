'use strict';

var Just = require('just');
var Promise = require('promise');

exports.name = 'just';
exports.inputFormats = ['just'];
exports.outputFormat = 'html';

exports.renderAsync = function (str, options, locals) {
  // Prepare the options array.
  options = options || {};
  options['root'] = { page: str };

  // Construct the template.
  var template = new Just(options);

  // Build the Promise to render the template.
  return new Promise(function (resolve, reject) {
    template.render('page', locals, function (err, output) {
      if (err) {
        return reject(err);
      }
      resolve(output);
    });
  });
};
