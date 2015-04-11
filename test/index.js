'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');

var transform = require('../');

var input = fs.readFileSync(join(__dirname, 'input.txt')).toString();
var expected = fs.readFileSync(join(__dirname, 'expected.txt')).toString();

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected);
}

test('JUST', function (done) {
  transform.renderAsync(input, null, { name: 'World' }).then(function (res) {
    assertEqual(res.trim(), expected.trim());
    done();
  });
});
