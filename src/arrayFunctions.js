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

mapR = function(mapper,list){
  if(list.length==0){
    return [];
  }
  return [mapper(list[0])].concat(mapR(mapper,list.slice(1)));
}



module.exports = { reduce, filter, map, mapR };
