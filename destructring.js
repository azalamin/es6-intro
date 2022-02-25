const elisha = {
    name: "hilsha",
    id: 153,
    weight: 2,
    address: 'Chandpur',
    dress: "Silver",
    company: {
        companyName: 'Catch fish',
        Cid: 33,
        ceo: 'Nura ahmed',
        age: 37
    }
};

const { name, id, address, dress } = elisha;
// // console.log(name, id, address, dress)
const { companyName, Cid, ceo, age } = elisha.company;
// console.log(companyName, Cid, ceo, age)

const array = [233, 444, 555];
const [p, q] = array;
// console.log(p, q)

const myObj = { x: 22, y: 44, z: 66, a: 23, b: 88 };
const { x, b } = myObj
// console.log(x, b)
console.log('myObj.p', myObj.p.q)