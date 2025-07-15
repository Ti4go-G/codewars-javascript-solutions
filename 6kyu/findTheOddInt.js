function findOdd(a) {
  const counter = a.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  
  return parseInt(Object.keys(counter).find(key => counter[key] % 2 !== 0));
}
// This function finds the integer that appears an odd number of times in the array 'a'.