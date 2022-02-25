const products = [
    { name: "Apple laptop", price: 100000, color: "gray" },
    { name: "Mobile Phone", price: 40000, color: "black" },
    { name: "Book", price: 300, color: "black" },
    { name: "Bat", price: 400, color: "White" },
    { name: "Watch", price: 3000, color: "Blue" }
]
products.forEach(product => console.log(product.price, product.name));