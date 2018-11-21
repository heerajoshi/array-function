const map = function(mapper,inputArray){
  let result = [];
  for(element of inputArray){
    let outputElement = mapper(element); 
    result.push(outputElement)
 }
return result;
}

const filter = function(predicate,inputArray){
  let result = [];
  for(element of inputArray){
    let output = predicate(element)
    if(output){
      result.push(element);
    }
  }
  return result;
}

const reduce = function(reducer,inputArray,initializr){
  let acc = '';
  for(let index = 0; index < inputArray.length; index++ ){
    if(!initializr){
      initializr = inputArray[0];
      index++;
    }
    acc = reducer(initializr,inputArray[index])
    initializr = acc;
  }
  return acc;
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
