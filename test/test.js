var assert = require('assert');

var array = ['a', 'b', 'd', 'e', 'x'];
var reference = ['a', 'b', 'c', 'd', 'e'];

var information = require('../lib/information.js').getInformation(array, reference);

console.log(information);

assert.equal(information.tp, 4, 'should get true positive');
assert.equal(information.fp, 1, 'should get false positive');
assert.equal(information.tn, 1, 'should get true negative');
assert.equal(information.fn, 1, 'should get false negative');

assert.equal(information.precision, 0.8, 'should get precision');
assert.equal(information.recall, 0.8, 'should get recall');

assert.equal(information.tnrate, 0.5, 'should get true negative rate');
assert.equal(information.accurancy, 0.7142857142857143, 'should get accurancy');

console.log('OK');
