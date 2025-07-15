function mineLocation(field){
  let location
  for(let i = 0; i<field.length; i++){
    for(let j = 0; j<field.length;j++){
      if(field[i][j] === 1)  return location = [i,j]
    }
  }
  
}
//receives a 2D array, return the location of the mine as an array [x,y] where x is the row and y is the column