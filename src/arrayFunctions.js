const map = function(func,inputArray){
  let result = [];
  for(element of inputArray){
    let outputElement = func(element); 
    result.push(outputElement)
 }
return result;
}

const filter = function(func,inputArray){
  let result = [];
  for(element of inputArray){
    let output = func(element)
    if(output){
      result.push(element);
    }
  }
  return result;
}

const reduce = function(func,inputArray,initializr){
  let acc = '';
  for(let index = 0; index < inputArray.length; index++ ){
    if(!initializr){
      initializr = inputArray[0];
      index++;
    }
    acc = func(initializr,inputArray[index])
    initializr = acc;
  }
  return acc;
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
