function nbYear(p0, percent, aug, p, years = 0) {
    if(p0 >= p) return years
    let n = Math.floor(p0 + p0*(percent/100) + aug)
  
 return nbYear(n, percent, aug, p, years + 1)
}