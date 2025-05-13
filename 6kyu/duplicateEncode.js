function duplicateEncode(word){
    return word.toUpperCase().split('').map((char, index, arr)=>{
      if(arr.indexOf(char) === arr.lastIndexOf(char)){
        return '('
      }
      else{
        return ')'
      }
    }).join('')
    
}