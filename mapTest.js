const assert = require('assert');
const map = require('./arrayFunctions.js').map;

const add5 = function(element) {
  return element + 5;
}

let inputArr = [2, 3, 4];

assert.deepEqual(map(add5, inputArr), [7, 8, 9] );
inputArr = [1, 0, 6, 9, 100];
assert.deepEqual(map(add5, inputArr), [6, 5, 11, 14, 105] );
