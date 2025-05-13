const findNb = (m) =>{
    let volume = 0;
    let n = 0;
    while(volume<m){
      n++
      volume += n ** 3
    }

    return volume === m ? n : -1;
}
console.log(findNb(4183059834009))