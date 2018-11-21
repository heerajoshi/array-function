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
  let startIndex = 0;;
  if(initializr === undefined){
    initializr = inputArray[0];
    startIndex++;
  }
  let result = initializr;
  for(let index = startIndex; index < inputArray.length; index++ ){
    result = reducer(result,inputArray[index])
  }
  return result;
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
