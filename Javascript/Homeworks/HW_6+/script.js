// 1 - Напишіть функцію cutString(str, n), яка ділить стрінг на підстрінги, які складаються з n символів.
// console.log(cutString('насолода',2)) // [на,со,ло,да]

function cutString(str, n) {
    const newArr = [];
    for (let i = 0; i < str.length; i = i + n) {
        newArr.push(str.substring(i, i + n));
    }
    return newArr;
}

console.log((cutString('насолода', 2)));

// 2 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Шо по русні? Йде нахуй';
// console.log(delete_characters(str, 12));
let str = 'Шо по русні? Йде нахуй';
delete_characters = (str, length) => str.substring(0, length);

console.log(delete_characters(str, 12));

// 3 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let str1 = "HTML JavaScript PHP";
//   console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = str => str.replaceAll(' ', '-').toUpperCase();
console.log(insert_dash(str1));

// 4 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstLtoUpper = str => str[0].toUpperCase() + str.slice(1);

console.log(firstLtoUpper('javascript'));

// 5 -  список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let normalizer = (str) => str.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' ');
console.log(normalizer('Harry..Potter'));
console.log(normalizer('Ron---Whisley'));
console.log(normalizer('Hermione__Granger'));

// 6 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arrGenerate = limit => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = (Math.floor(Math.random() * limit));
    }
    return arr
}
console.log(arrGenerate(100));

// 6.1 - Відсортувати його за допомоги sort
let sortedArr = arrGenerate(100).sort((a, b) => a - b);
console.log(sortedArr);

// 6.2 - Відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let filteredArr = sortedArr.filter(number => number % 2 === 0);
console.log(filteredArr);

// 7 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = str => {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' -> ');
}
console.log(capitalize('html/css javascript typescript react angular'));

// 8 - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :дані до знака равлика(@), наявність равлика, крапку яка знаходиться не менше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

emailValidator = email => {
    email = email.toLowerCase();
    if (!email.includes('@') || !email.includes('.')) {
        return false;
    }
    let local = email.slice(0, email.indexOf('@'));
    let domain = email.slice(email.indexOf('@') + 1);
    let indexOfDot = domain.indexOf('.');
    return !(local.length === 0 || indexOfDot < 0 || domain.length - indexOfDot < 3);

}


console.log(emailValidator('some@email.com'));
console.log(emailValidator('some@EMAIL.COM'));
console.log(emailValidator('some@EMAIL.com'));
console.log(emailValidator('some@email'));
console.log(emailValidator('@email.com'));
console.log(emailValidator('someemail.com'));
console.log(emailValidator('some@e.com'));
