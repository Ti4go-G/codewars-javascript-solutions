const countBits = (n) => n.toString(2).split('').filter(bit => bit === '1').length;

 console.log(countBits(3)) 