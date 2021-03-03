'use strict';

//№1
let number = 1, count = 0;

while (number <= 100) {
    for (let divisor = 1; divisor <= 100; divisor++) {
        if (number % divisor === 0) count++;
    }

    if (count <= 2) {
        console.log(number);
    }
    number++;
    count = 0;
}

//№2

const cart = [
    ['jeans', 250, 3],
    ['caps', 150, 4],
    ['blouses', 200, 2],
    ['socks', 60, 5],
]

function countBasketPrice(itemOne, itemTwo, itemThree, itemFour) {
    let sum = 0;
    sum = itemOne[1] * itemOne[2] + itemTwo[1] * itemTwo[2] + itemThree[1] * itemThree[2] + itemFour[1] * itemFour[2];
    return alert(sum);
}

countBasketPrice(cart[0], cart[1], cart[2], cart[3]);

//№3

for (let i = 0; i < 9; i++, console.log(i)) {

}

//№4

// let strings = 1;
// // let text = 'x';
// let score = 1;

// while (strings <= 20) {
//     console.log('x'.repeat(score));
//     strings++;
//     score++;
// }

let strings = 1;

for (let score = 0; score < 20; score++) {
    console.log('x'.repeat(strings));
    strings++;
}