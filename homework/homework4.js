'use strict';

//№1
let userNumber = prompt('Введите число от 0 до 999');

function getObject(number) {
    let units = number % 10;
    let dozens = Math.floor((number % 100) / 10);
    let hundreds = Math.floor(number / 100);
    return {
        units: units,
        dozens: dozens,
        hundreds: hundreds
    }
}

getObject(userNumber);

//№2

// let Prise = 0;

// const jeans = {
//     count: 3,
//     price: 250,
//     size: ['X', 'S', 'M', 'L', 'XL'],
//     color: ['red', 'blue', 'white', 'green'],
//     totalPriceThing() {
//         return this.price * this.count;
//     }
// }

// const caps = {
//     count: 4,
//     price: 150,
//     size: ['X', 'S', 'M', 'L', 'XL'],
//     color: ['red', 'blue', 'white', 'green'],
//     totalPriceThing() {
//         return this.price * this.count;
//     }
// }

// const blouses = {
//     count: 2,
//     price: 200,
//     size: ['X', 'S', 'M', 'L', 'XL'],
//     color: ['red', 'blue', 'white', 'green'],
//     totalPriceThing() {
//         return this.price * this.count;
//     }
// }

// const socks = {
//     count: 5,
//     price: 60,
//     size: ['X', 'S', 'M', 'L', 'XL'],
//     color: ['red', 'blue', 'white', 'green'],
//     totalPriceThing() {
//         return this.price * this.count;
//     }
// }

// Prise = Prise + jeans.totalPriceThing() + caps.totalPriceThing() + blouses.totalPriceThing() + socks.totalPriceThing();
// console.log(Prise);

let totalPrise = 0;

const card = [
    {
        type: 'jeans',
        count: 3,
        price: 250,
        size: ['X', 'S', 'M', 'L', 'XL'],
        color: ['red', 'blue', 'white', 'green'],
        totalPriceThing() {
            return this.price * this.count;
        }
    },

    {
        type: 'caps',
        count: 4,
        price: 150,
        size: ['X', 'S', 'M', 'L', 'XL'],
        color: ['red', 'blue', 'white', 'green'],
        totalPriceThing() {
            return this.price * this.count;
        }
    },

    {
        type: 'blouses',
        count: 2,
        price: 200,
        size: ['X', 'S', 'M', 'L', 'XL'],
        color: ['red', 'blue', 'white', 'green'],
        totalPriceThing() {
            return this.price * this.count;
        }
    },

    {
        type: 'socks',
        count: 5,
        price: 60,
        size: ['X', 'S', 'M', 'L', 'XL'],
        color: ['red', 'blue', 'white', 'green'],
        totalPriceThing() {
            return this.price * this.count;
        }
    },
]

for (let i = 0; i < card.length; i++) {
    console.log(card[i].totalPriceThing());
    totalPrise += card[i].totalPriceThing();
}
console.log(totalPrise);
