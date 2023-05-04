/*1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log*/
let a = 'hello';
console.log(a);
let b = 'owu';
console.log(b);
let c = 'com';
console.log(c);
let d = 'ua';
console.log(d);
let e = 1;
console.log(e);
let f = 10;
console.log(f);
let g = -999;
console.log(g);
let h = 123;
console.log(h);
let i = 3.14;
console.log(i);
let j = 2.7;
console.log(j);
let k = 16;
console.log(k);
let l = true;
console.log(l);
let m = false;
console.log(m);

/*2. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)*/
let firstName = 'Vladyslav';
let middleName = 'Marianovych';
let lastName = 'Ostafiychuk';

let person = firstName + middleName + lastName;
console.log(person);
console.log(`My name is ${firstName} ${middleName} ${lastName}.`);

/*3. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;*/
let n = 100;
console.log(typeof n);
let o = '100';
console.log(typeof o);
let p = true;
console.log(typeof p);

/*4. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/
let name = prompt('What is your name?', "");
let patronymic = prompt('What is your patronymic name?', "");
let age = +prompt('What is your age?', "");
alert(`Your name is ${name}, your patronymic name is ${patronymic} and you are ${age} years old.`);
console.log(`Your name is ${name}, your patronymic name is ${patronymic} and you are ${age} years old.`);
