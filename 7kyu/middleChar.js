function getMiddle(s) {
  if(s.length % 2 === 0) return `${s[s.length/2 - 1]}` +`${s[s.length/2]}`
    return s[Math.floor(s.length / 2)];
}