const zero = (operation) => {
    if (operation === undefined) return 0;
    return operation(0);
};
const one = (operation) => {
    if (operation === undefined) return 1;
    return operation(1);
};
const two = (operation) => {
    if (operation === undefined) return 2;
    return operation(2);
};
const three = (operation) => {
    if (operation === undefined) return 3;
    return operation(3);
};
const four = (operation) => {
    if (operation === undefined) return 4;
    return operation(4);
};
const five = (operation) => {
    if (operation === undefined) return 5;
    return operation(5);
};
const six = (operation) => {
    if (operation === undefined) return 6;
    return operation(6);
};
const seven = (operation) => {
    if (operation === undefined) return 7;
    return operation(7);
};
const eight = (operation) => {
    if (operation === undefined) return 8;
    return operation(8);
};
const nine = (operation) => {
    if (operation === undefined) return 9;
    return operation(9);
};

const plus = (x) => (y) => y + x;
const minus = (x) => (y) => y - x;
const times = (x) => (y) => x * y;
const dividedBy = (x) => (y) => Math.floor(y / x);

/*Example usage:
 console.log(seven(times(five()))); // 35
 This code uses closures to create a simple calculator where you can chain operations like `seven(times(five()))` to get the result of 35.
 If no operation is provided, the functions return their respective numbers.
 */