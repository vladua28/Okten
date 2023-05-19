// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b;
}

console.log(rectangleArea(2, 3));
console.log('*************************')

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return Math.PI * (r ** 2);
}

console.log(circleArea(5));
console.log('*************************')

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(r, h) {
    return Math.PI * (r ** 2) * h;
}

console.log(cylinderArea(3, 5));
console.log('*************************')

// 4 - створити функцію яка приймає масив та виводить кожен його елемент
function arrayPrinter(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

arrayPrinter([1, 2, 3, 4, 5]);

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write('<p>' + text + '</p>');
}

paragraph('Hello world!')

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(text) {
    document.write('<ul>');
    document.write('<li>' + text + '</li>');
    document.write('<li>' + text + '</li>');
    document.write('<li>' + text + '</li>');
    document.write('</ul>');
}

list('some text');

// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listLoop(text) {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write('<li>' + text + '</li>')
    }
    document.write('</ul>');
}

listLoop('some text some text');

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [1, 5, 10, 'cat', 'dog', true, false];

function arrToList(arr) {
    document.write('<ul>')
    for (let item of arr) {
        document.write('<li>' + item + '</li>')
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

function arrToDoc(arr) {
    let result = '';
    for (let user of users) {
        result += '<div class="block">';
        result += `<h3>${user.id} - ${user.name}</h3>`;
        result += `<p>${user.name} is ${user.age} years old</p>`;
        result += '</div>';
        document.write(result);
    }
}

arrToDoc(users);

// 10 - створити функцію яка повертає найменьше число з масиву
let someArr = [0, -10, 20, -5, 10, -30, 15];

function minNumber(arr) {
    for (let i = 0; i < someArr.length; i++) {
    }
}