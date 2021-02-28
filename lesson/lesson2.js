'use strict';

// var goodsCount = 10;
// if (goodsCount > 0) {
//     console.log('Количество товара в корзине ' + goodsCount);
// } else {
//     console.log('Корзина пуста');
// }


// goodsCount > 0 // условие
//     ? console.log('Количество товара в корзине ' + goodsCount) // true
//     : console.log('Корзина пуста') // false


// const result = goodsCount > 0
//     ? 'Количество товара в корзине ' + goodsCount
//     : 'Корзина пуста'
// console.log(result); 


// const good = 'Яблоки';
// if (good === 'Бананы') {
//     console.log('Стоимость бананов 50р.');
// } else {
//     if (good === 'Манго') {
//         console.log('Стоимость манго 80р.');
//     } else {
//         if (good === 'Яблоки' || good === 'Груши') {
//             console.log('Стоимость яблок и груш 40р.');
//         } else {
//             console.log('Неизвестный фрукт');
//         }
//     }
// }


// const good = 'Яблоки';
// if (good === 'Бананы') {
//     console.log('Стоимость бананов 50р.');
// } else if (good === 'Манго') {
//     console.log('Стоимость манго 80р.');
// } else if (good === 'Яблоки' || good === 'Груши') {
//     console.log('Стоимость яблок и груш 40р.');
// } else {
//     console.log('Неизвестный фрукт');
// }


// const good = 'Яблоки';
// switch (good) {
//     case 'Бананы':
//         console.log('Стоимость бананов 50р.');
//         break;
//     case 'Манго':
//         console.log('Стоимость манго 80р.');
//         break;
//     // case 'Яблоки':
//     //     console.log('Стоимость яблок и груш 40р.');
//     //     break;
//     // case 'Груши':
//     //     console.log('Стоимость яблок и груш 40р.');
//     //     break;
//     case 'Яблоки':
//     case 'Груши':
//         console.log('Стоимость яблок и груш 40р.');
//         break;
//     default:
//         console.log('Неизвестный фрукт');
// }


// const good = 'Яблоки';
// function sayPrice(good) {
//     switch (good) {
//         case 'Бананы':
//             console.log('Стоимость бананов 50р.');
//             break;
//         case 'Манго':
//             console.log('Стоимость манго 80р.');
//             break;
//         case 'Яблоки':
//         case 'Груши':
//             console.log('Стоимость яблок и груш 40р.');
//             break;
//         default:
//             console.log('Неизвестный фрукт');
//     }
// }
// sayPrice();
// sayPrice('Манго');
// sayPrice(good);


// function sayPrice(price = 'Не известна') {
//     console.log('Цена товара' + price);
// }

// sayPrice(10);
// sayPrice();



// const good = 'Яблоки';
// function getGoodPrice(good) {
//     switch (good.toLowerCase()) {
//         case 'бананы': return 50;
//         case 'манго': return 50;
//         case 'яблоки':
//         case 'груши':
//             return 40;
//         default: return null;
//     }
// }

// // const price = getGoodPrice(good); // getGoodPrice('das') + 10; => 10
// // if (price != null) console.log(price);
// // if (typeof price === 'number') console.log(price);

// function getPriceByeCount(good, count = 1) {
//     const price = getGoodPrice(good);
//     if (typeof price !== 'number') return null;
//     return price * const ;
// }

// console.log(getPriceByeCount(good, 4));
// console.log(getPriceByeCount(good));
// console.log(getPriceByeCount());
// console.log(getPriceByeCount('МаНго', 1.2));



// //Function Declaretion
// foo();
// function foo() {
//     console.log(123);
// }
// foo();

// //Function Expression
// myFoo();
// var myFoo = foo;
// const myFoo = foo;
// const myFoo = function () {
//     console.log(345)
// };
// myFoo();


// function recursion(x) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Загадайте целое число больше 0';
//     if (x === 1) return '1';
//     return recursion(x - 1) + ' ' + x; // сначала recursion(x - 1), потом х
// }

// console.log(recursion(1));


let number;
let attempts;

function resetGame() {
    attempts = 0;
    number = Math.floor(Math.random() * 100); // => 0.21311231 * 100 => 21.311231 => 21
    console.log(number);
}

function tryGuessNumber() {
    const userAnswer = parseInt(prompt('Введите число от 0 до 100 или -1 для выхода'));

    if (userAnswer === -1) return alert('До свидания');

    if (isNaN(userAnswer)) {
        alert('Необходимо ввести число от 0 до 100');
        tryGuessNumber();
        return;
    }

    attempts++;

    if (userAnswer > number) {
        alert('Попробуйте число меньше');
    } else if (userAnswer < number) {
        alert('Попробуйте число больше');
    } else {
        alert('Поздравлем! Вы угадали число с ' + attempts + 'попытки(ок)');

        if (!confirm('Хотите сыграть еще раз?')) return alert('До свидания');

        resetGame();
    }
    tryGuessNumber();
}

resetGame();
tryGuessNumber();
