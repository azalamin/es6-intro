const numbers = [12, 3, 6, 7, 44, 99, 33, 66];
const numbers3 = [00, 67, 77, 33, 44, 88, 99];
const number2 = [...numbers, ...numbers3];
const max = Math.max(...number2);
const min = Math.min(...number2);
console.log(max, min);