// Two dimensional arrow function
const add = (num1, num2) => num1 + num2;

// Multiple parameter arrow function
const add2 = (num1, num2, num3) => {
    const res = (num1 - num2) * num3;
    const result = res / 3
    return result
};
// console.log(add2(13, 8, 7));
// one parameter arrow function
const add3 = num => num + 2;
console.log(add3(6));