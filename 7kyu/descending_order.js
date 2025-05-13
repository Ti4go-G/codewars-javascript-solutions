function descendingOrder(n){
  
  return Number(n.toString()
                .split('')
                .map(value => Number(value))
                .sort((a,b) => b - a)
                .join(''))

}