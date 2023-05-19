// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arrEven = [];
for (let i = 0; arrEven.length < 50; i++) {
    if (i % 2 === 0) {
        arrEven[arrEven.length] = i;
    }
}
console.log(arrEven);

let arrOdd = [];
for (let i = 0; arrOdd.length < 50; i++) {
    if (i % 2 !== 0) {
        arrOdd[arrOdd.length] = i;
    }
}
console.log(arrOdd);

let arrRandom = [];
for (let i = 0; arrRandom.length < 20; i++) {
    arrRandom[arrRandom.length] = Math.floor(Math.random() * 100);
}
console.log(arrRandom);

let arrRandomScope = [];
for (let i = 0; arrRandomScope.length < 20; i++) {
    arrRandomScope[arrRandomScope.length] = Math.floor(Math.random() * (732 - 8) + 8);
}
console.log(arrRandomScope);

//  2. Вивести за допомогою console.log кожен третій елемент
for (let j = 2; j < arrRandom.length; j += 2) {
    console.log(arrRandom[j])
}

//  3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
for (let j = 2; j < arrRandom.length; j += 2) {
    if (arrRandom[j] % 2 === 0) {
        console.log(arrRandom[j])
    }
}

//  4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = [];
for (let i = 2; i < arrRandom.length; i += 2) {
    if (arrRandom[i] % 2 === 0) {
        newArr[newArr.length] = arrRandom[i];
    }
}
console.log(newArr);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let exampleArr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < exampleArr.length - 1; i++) {
    if (exampleArr[(i + 1)] % 2 === 0) {
        console.log(exampleArr[i]);
    }
}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let numbers = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum)
console.log(Math.floor(sum / numbers.length));

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArr = [];
let newRandomArr = [];
for (let i = 0; randomArr.length < 10; i++) {
    randomArr[randomArr.length] = Math.floor(Math.random() * 10);
    newRandomArr[newRandomArr.length] = randomArr[i] * 5;
}
console.log(randomArr);
console.log(newRandomArr)

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let someArr = [true, [1, 2, 3], 10, {name: 'Vlad'}, 50, false, undefined, 100];
let someNewArr = [];
for (let item of someArr) {
    if (typeof item === 'number') {
        someNewArr[someNewArr.length] = item;
    }
}
console.log(someNewArr);



