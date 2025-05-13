function highAndLow(numbers){
  const arrNumbers = numbers.split(' ')
  let max = Math.max(...arrNumbers)
  let min = Math.min(...arrNumbers)
  return `${max} ${min}`
}