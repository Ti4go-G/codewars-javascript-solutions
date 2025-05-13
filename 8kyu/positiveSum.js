function positiveSum(arr) {
  return arr.reduce((acc, value) => {
    if (value > 0) {
      acc += value;
    }
    return acc;
  }, 0)
}