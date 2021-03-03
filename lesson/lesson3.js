'use strict';

// let i = 0;

// while (i < 3) {
//     console.log(i);
//     i++;
// }

// console.log(i); //3 


// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i < 3);


// for (var i = 0; i < 3; i++) { // c let будет ошибка
//     // for (var i = 0, b = 3; i < 3; i++ , b--) {}
//     console.log(i);
// }

// console.log(i); // 3




// бесконечные циклы

// while (true) {
//     console.log(1);
// }

// do {
//     console.log(1);
// } while (true);

// for (; ;) { // в условии 1 = 1
//     console.log(1);
// }

// for (let i = 0; ; i++) {
//     if (i > 10) break; // выход из цикла
//     if (i % 2 === 1) continue; // завершение итерации
//     console.log(i);
// }

// outerLoop: // метка цикла (название) выкидывает из внешнего цикла
// for (let a = 0; a < 3; a++) {
//     console.log('Upper cycle is running');
//     for (let b = 0; b < 3; b++) {
//         console.log('Inner cycle is running');
//         if (b >= 1) {
//             console.log('Breaking inner cycle');
//             break outerLoop;
//         }
//     }
// }

// массивы (в js набор любых типов значений)


// let arr = [];
// let arr = [1, 2, 3, true, [5, 6]];

// let new arr = new Array(5); // пустой массив длиной в 5 элементов
// let new arr = new Array(5, 1, 2, 3, 4, 5); // массив длиной в 5 элементов с 1, 2, 3, 4, 5 элементами
// console.log(arr);
// arr.length = 0; // можно изменить длину массива
// console.log(arr.length); // длина массива

// let arr = [
//     [1, 3, false, 're'],  //0
//     [1, 0, true],         //1
//     [true, 'asda', NaN]   //2
// ]

// console.log(arr[2][1]); //у массива 2 элемент с индексом 1

let arr = [true, 'string', NaN, 32];

// for (let i = 0; i < arr.length; i++) { // i отвечает за индекс
//     console.log(arr[i]);
// }

// for (const kay in arr) {  // по ключу. key - наименование ключа, можно поменять key = 0..n
//     console.log(arr[key]);
// }

// for (const val of arr) { // перебор по значению val = arr[0]..arr[n]
//     console.log(val);
// }

// let arr = [];
// arr[1] = 3;
// arr[100] = '1qweq';
// delete arr[1];
// console.log(arr);

// console.log(arr, arr.push('end')); // добавление элемента в конец + длина массива
// console.log(arr, arr.unshift('begin')); // добавление элемента в начало + длина массива
//   
// console.log(arr, arr.pop()); // удаление из массива ласт элемент + его вывод
// console.log(arr, arr.shift()); // удаление из массива первый элемент + его вывод
//
// console.log(arr, arr.splice(1, 1)); // с какого элемента начать удалять и сколько удалять + выводит массив удаленных элементов
// console.log(arr, arr.splice(1, 1, 'qweq')); // удалили элемент под индексом 1 + вместо него вставили элемент 'qweq'
// console.log(arr, arr.splice(1, 0, 'qweq')); // ничего не удалится, просто под индексом 1 появится 'qweq' остальные элементы сдвинутся вправо

// forEach(), map(), find(), reduce(), includes() -- DZ

// const arr2 = arr;
// console.log(arr === arr2); // копируем ссылку на массив

// arr.pop();
// console.log(arr2);

// const arrCopy = Array.from(arr); // правильное копирование массива
// или const arrCopy = [...arr];
// console.log(arrCopy);

// console.log(arr === arrCopy);


