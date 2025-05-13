function squareDigits(num) {
  return Number(num
    .toString()        
    .split('')         
    .map(digit =>      
      Number(digit)*Number(digit) 
    )
    .join(''));        
}