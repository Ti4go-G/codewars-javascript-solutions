function spinWords(string) {
    const arrayString = string.split(" ");
    let temp;
    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i].length >= 5) {
            temp = arrayString[i].split("").reverse().join("");
            arrayString[i] = temp;
        }
    }
    return arrayString.join(" ")


}

console.log(spinWords("Hey fellow warriors"));