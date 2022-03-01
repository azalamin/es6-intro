/* 
const bank = (owner) => {
    balance = 0
    return amount => {
        balance += amount;
        return balance
    }
} 
*/

const bank = (owner) => {
    let balance = 0
    return {
        deposit: amount => {
            balance += amount;
            return balance
        },
        withdraw: amount => {
            balance -= amount;
            return balance
        }
    }
}

const bank1 = bank('Samiul');
console.log(bank1.deposit(400))
console.log(bank1.withdraw(200))
console.log(bank1.deposit(400))
console.log(bank1.deposit(600))
console.log(bank1.balance)
console.log(bank1.withdraw(500))