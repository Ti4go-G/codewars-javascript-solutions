function arrayDiff(a, b) {
  let newArr = a.filter((el) => !b.includes(el));
  return newArr
}// return the array containing the the difference between two arrays