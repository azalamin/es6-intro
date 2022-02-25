const doubleIt = num => num % 5;

const add = (num1, num2) => {
    const firstN = num1 + 2;
    const secondN = num2 + 2;
    const multiply = firstN * secondN;
    return multiply
}
const add2 = (num1, num2) => (num1 + 2) * (num2 + 2);
const multiply = (num1, num2, num3) => num1 * num2 * num3;

const numbers = [12, 13, 44, 33, 64, 11, 23, 55, 77];
const multiplied = numbers.map(number => number * 5);
const oddNumbers = numbers.filter(number => number % 2 == 1);

const products = [
    { name: "Apple laptop", price: 100000, color: "gray" },
    { name: "Mobile Phone", price: 40000, color: "black" },
    { name: "Book", price: 5000, color: "black" },
    { name: "Bat", price: 400, color: "White" },
    { name: "Watch", price: 3000, color: "Blue" }
];

const findFiveThousand = products.find(product => product.price == 5000);
const { name, price, color } = products[0];
const [one, two, three, four] = numbers;

const getValue = (num1, num2, num3 = 7) => num1 + num2 + num3;
console.log(getValue(10, 10))