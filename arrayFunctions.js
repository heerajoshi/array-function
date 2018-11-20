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

const reduce = function(func,inputArray,startFrom){
  let acc = '';
  for(let index = 0; index < inputArray.length; index++ ){
    if(!startFrom){
      startFrom = inputArray[0];
      index++;
    }
    acc = func(startFrom,inputArray[index])
    startFrom = acc;
  }
  return acc;
}

exports.reduce = reduce;
exports.filter = filter;
exports.map = map;
