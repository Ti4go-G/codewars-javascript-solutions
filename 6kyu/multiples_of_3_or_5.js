function solution(number){
  let nums = 0
  if(number >= 0 ){
    for(let i = 0; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        nums += i
      }
    }return nums
  }return 0
  
}