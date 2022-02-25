const numbers = [4, 6, 8, 10];
const dabble = (number) => number * 3;
const dabbleIt = numbers.map(dabble);
// console.log(dabbleIt);
const squares = numbers.map(number => number * number);
// console.log(squares)

const products = [
    { name: "Apple laptop", price: 100000, color: "gray" },
    { name: "Mobile Phone", price: 40000, color: "black" },
    { name: "Book", price: 300, color: "black" },
    { name: "Bat", price: 400, color: "White" },
    { name: "Watch", price: 3000, color: "Blue" }
]
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
console.log(productName)
console.log(productPrice)
productName.map(name => console.log(name))
    // Apple laptop
    // Mobile Phone
    // Book
    // Bat
    // Watch