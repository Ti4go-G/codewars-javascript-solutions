function createPhoneNumber(numbers) {
    const codeArea = numbers.slice(0, 3).join("");
    const centralOfficeCode = numbers.slice(3, 6).join("");
    const subscriberNumber = numbers.slice(6).join("");
    return `(${codeArea}) ${centralOfficeCode}-${subscriberNumber}`
}