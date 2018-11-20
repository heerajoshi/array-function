const assert = require('assert');
const {map,filter,reduce} = require('../src/arrayFunctions.js');
 
const add5 = function(element) {
  return element + 5;
}

describe('map()', function() {
    it('should return a array increase by 5', function() {
    inputArr = [2, 3, 4];
    assert.deepEqual(map(add5, inputArr), [7, 8, 9] );
    });
  });







/*
//=====Map

const square = function(element){
  return element * element;
}

let inputArr = [];
assert.deepEqual(map(add5, inputArr), [] );

inputArr = [9];
assert.deepEqual(map(add5, inputArr), [14] );


inputArr = [1, 0, 6, 9, 100];
assert.deepEqual(map(add5, inputArr), [6, 5, 11, 14, 105] );

inputArr = [2, 3, 4];
assert.deepEqual(map(square, inputArr), [4, 9, 16] );

inputArr = [1, 0, 6, 9, 100];
assert.deepEqual(map(square, inputArr), [1, 0, 36, 81, 10000] );

//=========Filter

const isEven = function(element){
  return element % 2 === 0;
}

const isOdd = function(element){
  return element % 2 !== 0;
}

inputArr = [];
assert.deepEqual(filter(isOdd, inputArr), [] );

inputArr = [9];
assert.deepEqual(filter(isOdd, inputArr), [9] );

inputArr = [1, 0, 6, 9, 100];
assert.deepEqual(filter(isEven, inputArr), [0, 6, 100] );

inputArr = [2, 3, 4, 8];
assert.deepEqual(filter(isEven, inputArr), [2, 4, 8] );

inputArr = [1, 0, 6, 9, 100];
assert.deepEqual(filter(isOdd, inputArr), [1,9] );

inputArr = [2, 3, 4, 8, 9, 0, 1];
assert.deepEqual(filter(isOdd, inputArr), [3, 9, 1] );

//=========Reduce

const sum = function(a,b){
  return a+b;
}

const mul = function(a,b){
  return a*b;
}

//inputArr = [6];
//assert.deepEqual(reduce(sum, inputArr), 6 );

inputArr = [9];
assert.deepEqual(reduce(mul, inputArr, 8), 72 );

inputArr = [2, 3, 4, 8];
assert.deepEqual(reduce(sum, inputArr), 17 );

inputArr = [2, 3, 4, 8];
assert.deepEqual(reduce(sum, inputArr, 10), 27 );

inputArr = [2, 3, 4, 8];
assert.deepEqual(reduce(mul, inputArr), 192 );

inputArr = [2, 3, 4, 8];
assert.deepEqual(reduce(mul, inputArr, 10), 1920 );
*/
