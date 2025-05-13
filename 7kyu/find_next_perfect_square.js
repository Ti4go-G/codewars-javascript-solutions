function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq))){
        let nextSq = sq
        do{
          nextSq++
          
        }while(!Number.isInteger(Math.sqrt(nextSq)))
        return nextSq
     }
  return -1;
}