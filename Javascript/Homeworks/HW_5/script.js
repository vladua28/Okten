// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b;

console.log(rectangleArea(2, 3));

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = r => {
    return Math.floor(Math.PI * (r ** 2) * 10) / 10;
}

console.log(circleArea(5));

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderArea = (r, h) => {
    return Math.floor((Math.PI * (r ** 2) * h) * 10) / 10;
}

console.log(cylinderArea(3, 5));

// 4 - створити функцію яка приймає масив та виводить кожен його елемент
let arrayPrinter = arr => {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

arrayPrinter([1, 2, 3, 4, 5]);

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
paragraph = textContent => {
    document.write(`<p>${textContent}</p>`);
}

paragraph('some text');

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = text => {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

list('123');

// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listLoop = (text, count) => {
    document.write('<ul>')
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

listLoop('some text', 3);

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [1, 5, 10, 'cat', 'dog', true, false];

let arrToList = arr => {
    document.write('<ul>')
    for (let item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>');
}

arrToList(arr);

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 0, name: 'Vlad', age: 28},
    {id: 1, name: 'Kris', age: 26},
    {id: 2, name: 'Peter', age: 27},
    {id: 3, name: 'Olya', age: 20}
];

let arrToDoc = arr => {
    for (let user of arr) {
        let temp = `<div class="block"><p>id: ${user.id} - name: ${user.name} - age: ${user.age}</p></div>`;
        document.write(temp);
    }
}

arrToDoc(users);

// 10 - створити функцію яка повертає найменьше число з масиву
let someArr = [0, -10, 20, -5, 10, -30, 15];

let minNumber = arr => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

console.log(minNumber(someArr))

// 11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = arr => {
    let sumNum = 0;
    for (const num of arr) {
        sumNum += num;
    }
    return sumNum;
}

console.log(sum([4, 6, 8]));

// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let num1 = arr[index1];
    let num2 = arr[index2];
    arr[index1] = num2;
    arr[index2] = num1;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// 13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));


