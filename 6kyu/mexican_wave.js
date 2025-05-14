function wave(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        let temp = str.split("")
        if (temp[i] !== " ") {
            temp[i] = temp[i].toUpperCase()
            newArr.push(temp.join(""))
        }
    }
    return newArr
}

console.log(wave(""))