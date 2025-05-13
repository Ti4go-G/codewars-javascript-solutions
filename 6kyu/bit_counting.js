const countBits = (n) => {
    let temp = n.toString(2).split('')
    let counter = 0
    for(let i = 0; i< temp.length ; i++){
        if(temp[i] === '1') counter ++
    }
    return counter
    
  };

 console.log(countBits(3)) 