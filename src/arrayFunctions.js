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

const mapR = function(mapper,list){
  if(list.length==0){
    return [];
  }
  return [mapper(list[0])].concat(mapR(mapper,list.slice(1)));
}

const filterR = function(predicate,list){
  if(list.length ==0){
    return []
  }
  result = predicate(list[0])
  if(result){
    return [list[0]].concat(filterR(predicate,list.slice(1)))
  }
  return filterR(predicate,list.slice(1));
}

reduceR = function(reducer,list,initializer){
  if(initializer == undefined){
    initializer = list.shift();
  }
  if(list.length ==0){
    return initializer;
  }
  let acc = reducer(initializer,list[0]);
  return reduceR(reducer,list.slice(1),acc);
}


module.exports = { reduce, filter, map, mapR, filterR, reduceR };
