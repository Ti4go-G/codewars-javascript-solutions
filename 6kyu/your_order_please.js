const order = (words) => {
    let arr = words.split(' ')
    let sortedArr = new Array(arr.length)

    for (let word of arr) {
        let temp = Number(word.split('').find(char => !isNaN(char)))
        let index = Number(temp) - 1
        sortedArr[index] = word
    }
    return sortedArr.join(' ')


}

console.log(order("is2 Thi1s T4est 3a"))