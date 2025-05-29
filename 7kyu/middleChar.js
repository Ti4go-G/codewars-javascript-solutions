function getMiddle(s)
{
  if(s.length % 2 === 0){
    let middle = (s.length / 2) - 1
    return s[middle] + s[middle + 1]
  } else {
    let middle = Math.floor((s.length / 2))
    return s[middle]
  }
}