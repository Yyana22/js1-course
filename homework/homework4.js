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