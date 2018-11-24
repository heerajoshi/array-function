const assert = require('assert');
const {map,filter,reduce,mapR,filterR,reduceR} = require('../src/arrayFunctions.js');

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

const sum = function(a,b){
  return a+b;
}

const mul = function(a,b){
  return a*b;
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

describe('reduce()', function() {
  it ('for one element it should return the element multiply by initializr', function(){
    inputArr = [9];
    assert.deepEqual(reduce(mul, inputArr, 8), 72 );
  });

  it ('for no initializr should take first element as initializr and return add of all element',function(){
    inputArr = [2, 3, 4, 8];
    assert.deepEqual(reduce(sum, inputArr), 17 );
  });

  it ('for initializr is take initializr as first element and shoud return add of all element',function(){
    inputArr = [2, 3, 4, 8];
    assert.deepEqual(reduce(sum, inputArr, 10), 27 );
  });
});

describe('mapR()', function() {
  it('for empty array mapR should return an empty array', function() {
    inputArr = [];
    assert.deepEqual(mapR(add5, inputArr), [] );
  });

  it('for a array of one element should return an array of one element', function() {
    inputArr = [9];
    assert.deepEqual(mapR(add5, inputArr), [14] );
  });

  it('mapR should return an array increase by 5', function() {
    inputArr = [2, 3, 4];
    assert.deepEqual(mapR(add5, inputArr), [7, 8, 9] );
  });

  it('for a array mapR should return an array square of every element',function() {
    inputArr = [1, 0, 6, 9, 100];
    assert.deepEqual(mapR(square, inputArr), [1, 0, 36, 81, 10000] );
  });
})

describe('filterR()', function() {
  it('for empty array filterR should return an empty array', function() {
    inputArr = [];
    assert.deepEqual(filterR(isEven, inputArr), [] );
  });

  it('for no match should return an array of empty element', function() {
    inputArr = [9];
    assert.deepEqual(filterR(isEven, inputArr), [] );
  });

  it('should return an filterRd even array', function() {
    inputArr = [2, 3, 4];
    assert.deepEqual(filterR(isEven, inputArr), [2,4] );
  });

  it('should return an array of odd element',function() {
    inputArr = [1, 0, 6, 9, 100];
    assert.deepEqual(filterR(isOdd, inputArr), [1, 9] );
  });
})

describe('reduceR()', function() {
  it ('for one element it should return the element multiply by initializr', function(){
    inputArr = [9];
    assert.deepEqual(reduceR(mul, inputArr, 8), 72 );
  });

  it ('for no initializr should take first element as initializr and return add of all element',function(){
    inputArr = [2, 3, 4, 8];
    assert.deepEqual(reduceR(sum, inputArr), 17 );
  });

  it ('for initializr is take initializr as first element and shoud return add of all element',function(){
    inputArr = [2, 3, 4, 8];
    assert.deepEqual(reduceR(sum, inputArr, 10), 27 );
  });
});


