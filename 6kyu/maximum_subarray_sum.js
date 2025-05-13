const maxSequence = function(arr){
  let maxSoFar = 0;
  let currentSum = 0;
  
  if (arr.length === 0) return 0;
  else{
      for(let i = 0; i < arr.length; i++){
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSoFar = Math.max(maxSoFar, currentSum)
  }
  return maxSoFar
  }

}