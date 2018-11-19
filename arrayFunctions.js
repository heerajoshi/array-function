const map = function(func,inputArray){
  let result = [];
  for(element of inputArray){
    let outputElement = func(element); 
    result.push(outputElement)
 }
return result;
}

exports.map = map
