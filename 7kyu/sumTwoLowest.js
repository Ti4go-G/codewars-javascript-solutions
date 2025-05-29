function sumTwoSmallestNumbers(numbers) { 
  if(numbers.length < 4) return
  const sortedArr = [...numbers].sort((a, b) => a - b)
  return sortedArr[0] + sortedArr[1]
}