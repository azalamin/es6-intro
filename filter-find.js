const numbers = [5, 7, 11, 33, 66, 47, 29, 77, 44, 99];
const bigNumbers = numbers.filter(number => number > 30);
const smallNumbers = numbers.filter(number => number < 30);
// console.log(smallNumbers);

const products = [
    { name: "Apple laptop", price: 100000, color: "gray" },
    { name: "Mobile Phone", price: 40000, color: "black" },
    { name: "Book", price: 300, color: "black" },
    { name: "Bat", price: 400, color: "White" },
    { name: "Watch", price: 3000, color: "Blue" }
]

const expensive = products.filter(product => product.price > 500);
const cheap = products.filter(product => product.price < 500);
const blacks = products.filter(product => product.color == "black");
// console.log(blacks)


// Find

const whiteItem = products.find(product => product.color == "White");
console.log(whiteItem);