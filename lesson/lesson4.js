'use strict';

    // const obj = {};
    // const obj = new Object();
    // console.log(obj)

    // function getPropName(prop) {
    //     return 'testing new prop ' + prop;
    // }
    // const myCar = {
    //     manufacture: 'Toyota',
    //     color: 'black',
    //     'prop with space or-qwer': 123,
    //     [getPropName('test')]: 2,
    // }
    // myCar.newProp = 'asd';
    // myCar['newProp'] = 'asd';
    // console.log(myCar);

    // console.log(myCar.manufacture);
    // console.log(myCar.color);
    // console.log(myCar['prop with space or-qwer']);

    // const userSelect = 'color';
    // console.log(myCar[userSelect]);

    // const myCar = {
    //     manufacture: 'BMW',
    //     color: 'blue',
    //     engine: {
    //         power: 300,
    //         code: 'xxxxx',
    //     },
    //     possibleColors: ['black', 'white', 'yellow', 'brown'],
    //     // beep: function () {
    //     //     console.log('Beep!');
    //     // },
    //     beep() {
    //         console.log('Beep!');
    //     },
    //     // [Symbol.iterator]: function* () {
    //     //     yield 1234;
    //     //     yield 'rrqr';
    //     // }
    // };

    // for (let i = 0; i < myCar.possibleColors.length; i++) {
    //     console.log(myCar.possibleColors[i]);
    // }

    // console.log(myCar.engine.power);

    // console.log(Object.keys(myCar));
    // console.log(Object.getOwnPropertyNames(myCar));

    // for(const prop in myCar) {
    //     console.log('свойство: ', prop, ' значение: ',  myCar[prop]);
    // }

    // for(const val of myCar) {
    //     console.log(val);
    // }

    // function inc(a) {
    //     a++;
    //     console.log(a);
    // }
    //
    // let a = 1;
    // inc(a);
    // console.log(a) // 1

    // const obj = {
    //     num: 5,
    // };
    //
    // function inc(obj) {
    //     // const objCopy = Object.assign({}, obj);
    //     // objCopy.num++;
    //     obj.num++;
    //     // console.log(objCopy.num);
    // }
    //
    // inc(obj);
    // console.log(obj.num) // ?
    // 'use strict';
    // window.number = 10000;
    // function getObject() {
    //     return {
    //         number: 5,
    //         sayNumber() {
    //             console.log(this);
    //             console.log('Номер в объекте: ', this.number);
    //         }
    //     }
    // }
    //
    // const myObj = getObject();
    // // console.log(myObj);
    // const mySayNumber = myObj.sayNumber;
    //
    // myObj.sayNumber();
    // console.log(this);
    // mySayNumber();
    // window.number = false;
    // mySayNumber();
    // console.log('number' in myObj);