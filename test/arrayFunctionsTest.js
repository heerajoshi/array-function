const assert = require('assert');
const {map,filter,reduce} = require('../src/arrayFunctions.js');
 
const add5 = function(element) {
  return element + 5;
}

const square = function(element){
  return element * element;
}

const isEven = function(element){
  return element % 2 === 0;
}

const isOdd = function(element){
  return element % 2 !== 0;
}

describe('map()', function() {
  it('for empty array map should return an empty array', function() {
    inputArr = [];
    assert.deepEqual(map(add5, inputArr), [] );
  });

  it('for a array of one element should return an array of one element', function() {
    inputArr = [9];
    assert.deepEqual(map(add5, inputArr), [14] );
  });
  
  it('map should return an array increase by 5', function() {
    inputArr = [2, 3, 4];
    assert.deepEqual(map(add5, inputArr), [7, 8, 9] );
  });
  
  it('for a array map should return an array square of every element',function() {
    inputArr = [1, 0, 6, 9, 100];
    assert.deepEqual(map(square, inputArr), [1, 0, 36, 81, 10000] );
  });
})

describe('filter()', function() {
  it('for empty array filter should return an empty array', function() {
    inputArr = [];
    assert.deepEqual(filter(isEven, inputArr), [] );
  });

  it('for no match should return an array of empty element', function() {
    inputArr = [9];
    assert.deepEqual(filter(isEven, inputArr), [] );
  });
  
  it('should return an filterd even array', function() {
    inputArr = [2, 3, 4];
    assert.deepEqual(filter(isEven, inputArr), [2,4] );
  });
  
  it('should return an array of odd element',function() {
    inputArr = [1, 0, 6, 9, 100];
    assert.deepEqual(filter(isOdd, inputArr), [1, 9] );
  });
})



/*
    //=====Map




inputArr = [1, 0, 6, 9, 100];
assert.deepEqual(map(add5, inputArr), [6, 5, 11, 14, 105] );

inputArr = [2, 3, 4];
assert.deepEqual(map(square, inputArr), [4, 9, 16] );


//=========Filter

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
