// 1 --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

let arr2 = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
console.log(arr2);

let arr3 = [0, 'car', 'bike', true, false];
console.log(arr3);
console.log('*************************')

// 2 - Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let someArr = [];
someArr[0] = 100;
someArr[1] = 'js';
someArr[someArr.length] = true;
someArr[someArr.length] = false;
console.log(someArr);
console.log('*************************')

// 3 - є масив [2,17,13,6,22,31,45,66,100,-18]
// 3.1 - перебрати його циклом while
let numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < numArr.length) {
    console.log(numArr[i]);
    i++;
}
console.log('*************************')

// 3.2 - перебрати його циклом for
for (let j = 0; j < numArr.length; j++) {
    console.log(numArr[j]);
}
console.log('*************************')

// 3.3 - перебрати циклом while та вивести  числа тільки з непарним індексом
let k = 0;
while (k < numArr.length) {
    if (k % 2 !== 0) {
        console.log(numArr[k]);
    }
    k++
}
console.log('*************************')

// 3.4 - перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < numArr.length; i++) {
    if (i % 2 !== 0) {
        console.log(numArr[i])
    }
}
console.log('*************************')

// 3.5 - перебрати циклом while та вивести  числа тільки парні  значення
let l = 0;
while (l < numArr.length) {
    if (numArr[l] % 2 === 0) {
        console.log(numArr[l])
    }
    l++;
}
console.log('*************************')

// 3.6 - перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
        console.log(numArr[i]);
    }
}
console.log('*************************')

// 3.7 - замінити кожне число кратне 3 на слово "okten"
/*for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 3 === 0) {
        console.log(numArr[i] = 'okten');
    }
}
console.log('*************************')*/

// 3.8 - вивести масив в зворотньому порядку
for (let j = numArr.length - 1; j >= 0; j--) {
    console.log(numArr[j]);
}
console.log('*************************')

// 3.9 - всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let m = numArr.length - 1;
while (m >= 0) {
    console.log(numArr[m]);
    m--;
}
console.log('*************************')

// 4.1 - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [-100, -0, 1, 2.5, 10, 20, 50, 99, 121, 300];
for (const number of numbers) {
    console.log(number);
}
console.log('*************************')

// 4.2 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October'];
for (const month of months) {
    console.log(month);
}
console.log('*************************')

// 4.3 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixedArr = [-100, -0, 1, 2.5, 'November', 'December', ['Spring', 'Summer', 'Autumn', 'Winter'], {
    name: 'Vlad',
    age: 28
}, true, false];
for (const mixedArrElement of mixedArr) {
    console.log(mixedArrElement);
}
console.log('*************************')

// 4.4 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const mixedArrElement of mixedArr) {
    if (typeof (mixedArrElement) === "boolean") {
        console.log(mixedArrElement);
    }
}
console.log('*************************')

// 4.5 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const mixedArrElement of mixedArr) {
    if (typeof (mixedArrElement) === "number") {
        console.log(mixedArrElement);
    }
}
console.log('*************************')

// 4.6 - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let mixedArray = [-100, -0, 1, 2.5, 'November', 'December', ['Spring', 'Summer', 'Autumn', 'Winter'], {
    name: 'Vlad',
    age: 28
}, true, false];
for (const mixedArrElement of mixedArray) {
    if (typeof (mixedArrElement) === "string") {
        console.log(mixedArrElement);
    }
}
console.log('*************************')

// 5.1 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let newArr = [];
newArr[0] = -100;
newArr[1] = -0;
newArr[2] = 1;
newArr[3] = 2.5;
newArr[4] = 'November';
newArr[5] = 'December';
newArr[6] = ['Spring', 'Summer', 'Autumn', 'Winter'];
newArr[7] = {
    name: 'Vlad',
    age: 28
}
newArr[8] = true;
newArr[9] = false;
for (let newArrElement of newArr) {
    console.log(newArrElement);
}
console.log('*************************')

// 5.2 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
    document.write(`<br>`);
}
console.log('*************************')

// 5.3 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
    document.write(`<br>`);
}
console.log('*************************')

// 5.4 - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 200; i += 2) {
    console.log(i);
    document.write(i);
    document.write(`<br>`);
}
console.log('*************************')

// 5.5 - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
        document.write(`<br>`);
    }
}
console.log('*************************')

// 5.6 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i);
        document.write(`<br>`);
    }
}
console.log('*************************')

// 6.1 - стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: "The Adventures of Tom Sawyer",
        pageCount: 240,
        authors: ["Mark Twain"],
        genres: ["Adventure", "Fiction"]
    },
    {
        title: "1984",
        pageCount: 328,
        authors: ["George Orwell"],
        genres: ["Science Fiction", "Dystopia"]
    },
    {
        title: "Game of Thrones",
        pageCount: 694,
        authors: ["George R.R. Martin"],
        genres: ["Fantasy", "Fiction"]
    },
    {
        title: "To Kill a Mockingbird",
        pageCount: 336,
        authors: ["Harper Lee"],
        genres: ["Classic", "Fiction"]
    },
    {
        title: "The Lord of the Rings",
        pageCount: 1178,
        authors: ["J.R.R. Tolkien"],
        genres: ["Fantasy"]
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        pageCount: 320,
        authors: ["J.K. Rowling", "John Tiffany"],
        genres: ["Fantasy", "Young Adult"]
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        pageCount: 224,
        authors: ["Douglas Adams", "Eoin Colfer"],
        genres: ["Science Fiction", "Comedy"]
    }
];
console.log('*************************')

// 6.2 - знайти книжку з найбільшою кількістю сторінок.
let maxPageCount = 0;
let bookWithMaxPageCount = null;

for (let book of books) {
    if (book.pageCount > maxPageCount) {
        maxPageCount = book.pageCount;
        bookWithMaxPageCount = book;
    }
}
console.log('Книга з найбільшою кількістю сторінок:' + bookWithMaxPageCount.title);
console.log("Кількість сторінок: " + bookWithMaxPageCount.pageCount);
console.log('*************************')

// 6.3 - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenres = 0;
let bookWithMaxGenres = null;

for (let book of books) {
    if (book.genres.length > maxGenres) {
        maxGenres = book.genres;
        bookWithMaxGenres = book;
    }
}
console.log('Книга з найбільшою кількістю жанрів:' + bookWithMaxGenres.title);
console.log("Жанри: " + bookWithMaxGenres.genres.length + ": " + bookWithMaxGenres.genres.join(', '));
console.log('*************************')

// 6.4 - знайти книжку/ки з найдовшою назвою
let longestTitle = 0;
let bookWithLongestTitle = null;

for (let book of books) {
    if (book.title.length > longestTitle) {
        longestTitle = book.title.length;
        bookWithLongestTitle = book;
    }
}

if (bookWithLongestTitle !== null) {
    console.log('Книга з найдовшою назвою:' + bookWithLongestTitle.title);
} else {
    console.log('Масив books порожній')
}
console.log('*************************')

// 6.5 знайти книжку/ки які писали 2 автори
let numAuthors = 2;
let booksWith2Authors = [];
for (let book of books) {
    if (book.authors.length === numAuthors) {
        booksWith2Authors.push(book)
    }
}
console.log("Книги з двома авторами:");
for (let book of booksWith2Authors) {
    console.log("Назва: " + book.title);
    console.log("Автори: " + book.authors.join(", "));
    console.log("-------------");
}
console.log('*************************')

// 6.6 - знайти книжку/ки які писав 1 автор
numAuthors = 1;
let booksWithSingleAuthor = [];
for (let book of books) {
    if (book.authors.length === numAuthors) {
        booksWithSingleAuthor.push(book);
    }
}
console.log('Книги з 1 автором:')
for (let book of booksWithSingleAuthor) {
    console.log("Назва: " + book.title);
    console.log("Автори: " + book.authors.join(", "));
    console.log("-------------");
}