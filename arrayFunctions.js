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


exports.filter = filter
exports.map = map
