function myFunc(num1, num2 = 11) {
    return num1 + num2;
}
// console.log(myFunc(10))

function add(num1, num2) {
    num2 = num2 || 8;
    return num1 + num2;
}
console.log(add(3))

function add2(num1, num2) {
    if (num2 == undefined) {
        num2 = 7;
    }
    return num1 + num2;
}
// console.log(add2(5))

function add3(first, last = "Chowdhuri") {
    return first + " " + last;
}
console.log(add3('ahmad'))