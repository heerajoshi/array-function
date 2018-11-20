const assert = require('assert');
const {map,filter,reduce} = require('./arrayFunctions.js');

const add5 = function(element) {
  return element + 5;
}

const square = function(element){
  return element * element;
}

let inputArr = [2, 3, 4];
assert.deepEqual(map(add5, inputArr), [7, 8, 9] );

inputArr = [1, 0, 6, 9, 100];
assert.deepEqual(map(add5, inputArr), [6, 5, 11, 14, 105] );

inputArr = [2, 3, 4];
assert.deepEqual(map(square, inputArr), [4, 9, 16] );

inputArr = [1, 0, 6, 9, 100];
assert.deepEqual(map(square, inputArr), [1, 0, 36, 81, 10000] );

const isEven = function(element){
  return element % 2 === 0
}

inputArr = [1, 0, 6, 9, 100];
assert.deepEqual(filter(isEven, inputArr), [0, 6, 100] );

inputArr = [2, 3, 4, 8];
assert.deepEqual(filter(isEven, inputArr), [2, 4, 8] );

const sum = function(a,b){
  return a+b;
}

inputArr = [2, 3, 4, 8];
assert.deepEqual(reduce(sum, inputArr), 17 );

inputArr = [2, 3, 4, 8];
assert.deepEqual(reduce(sum, inputArr, 10), 27 );

