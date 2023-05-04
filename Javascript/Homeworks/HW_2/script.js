// 1. Масиви та об'єкти:
// 1.1 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr =
    [-5,
        100,
        'commit',
        'push',
        true,
        false,
        null,
        undefined,
        [5, 10, 'car', 'bike'],
        {
            id: 0,
            firstName: 'Vlad',
            lastName: 'Ostafiychuk',
            age: 28,
            status: true
        },];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);

// 1.2 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'The Witcher. The last wish',
    pageCount: 282,
    genre: "Dark fantasy"
};
let book2 = {
    title: 'Robinson Crusoe',
    pageCount: 392,
    genre: "Adventure"
};
let book3 = {
    title: 'The Hunger Games',
    pageCount: 384,
    genre: "Dystopian"
};

// 1.3 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let favouriteBooks = [
    {
        title: 'The Witcher. The last wish',
        pageCount: 282,
        genre: "Dark fantasy",
        authors: {
            name: 'Andrzej Sapkowski',
            age: 74
        }
    },
    {
        title: 'Robinson Crusoe',
        pageCount: 392,
        genre: "Adventure",
        authors: {
            name: 'Daniel Defoe',
            age: 74
        }
    },
    {
        title: 'The Hunger Games',
        pageCount: 384,
        genre: "Dystopian",
        authors: {
            name: 'Suzanne Collins',
            age: 74
        }
    }
]

// 1.4 - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
let users = [
    {
        name: 'Vlad',
        age: 28,
        password: "vlad28"
    },
    {
        name: 'Max',
        age: 25,
        password: "12345678"
    },
    {
        name: 'Dima',
        age: 30,
        password: "qwerty"
    },
    {
        name: 'Anna',
        age: 27,
        password: "01345"
    },
    {
        name: 'Olena',
        age: 35,
        password: "olena12"
    },
    {
        name: 'Oleg',
        age: 15,
        password: "oleg1"
    },
    {
        name: 'Roman',
        age: 19,
        password: "roma2000"
    },
    {
        name: 'Vova',
        age: 20,
        password: "vova10"
    },
    {
        name: 'Diana',
        age: 22,
        password: "dia10na"
    },
    {
        name: 'Misha',
        age: 30,
        password: "mishaqwerty"
    },
];
let user1 = users[0];
console.log(user1.password);
let user2 = users[1];
console.log(user2.password);
let user3 = users[2];
console.log(user3.password);
let user4 = users[3];
console.log(user4.password);
let user5 = users[4];
console.log(user5.password);
let user6 = users[5];
console.log(user6.password);
let user7 = users[6];
console.log(user7.password);
let user8 = users[7];
console.log(user8.password);
let user9 = users[8];
console.log(user9.password);
let user10 = users[9];
console.log(user10.password);

// 2. Логічні розгалуження
// 2.1 - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -1;
if (x !== 0) {
    console.log('Вірно');
} else {
    log('Невірно');
}
;

// 2.2 - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time = prompt('Введіть хвилини в форматі від 0 до 59');
if (time >= 0 && time < 15) {
    alert('Перша чверть години');
} else if (time >= 15 && time <= 29) {
    alert('Друга чверть години');
} else if (time >= 30 && time <= 44) {
    alert('Третя чверть години');
} else if (time >= 45 && time <= 59) {
    alert('Четверта чверть години');
} else {
    alert('???');
}
;

// 2.3 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('Котре сьогодні число?');
if (day >= 1 && day <= 15) {
    alert('Перша декада');
} else if (day > 15 && day <= 31) {
    alert('Друга декада');
} else {
    alert('???');
}
;

// 2.4 - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek = prompt('Введіть порядковий номер дня тижня');
switch (dayOfWeek) {
    case '1':
        alert('Monday');
        break;
    case '2':
        alert('Tuesday');
        break;
    case '3':
        alert('Wednesday');
        break;
    case '4':
        alert('Thursday');
        break;
    case '5':
        alert('Friday');
        break;
    case '6':
        alert('Saturday');
        break;
    case '7':
        alert('Sunday');
        break;
    default:
        alert('???');
}

// 2.5 - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох . Також потрібно врахувати коли введені рівні числа.
let a = +prompt('Введіть перше число');
let b = +prompt('Введіть друге число');
if (a > b) {
    alert('Перше число більше ніж друге');
} else if (b > a) {
    alert('Друге число більше ніж перше');
} else if (a === b) {
    alert('Числа рівні');
} else {
    alert('???');
}

// 2.6 - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let y = prompt('Введіть що-небудь');
if (y = y || 'default') {
    alert(`Ви ввели "${y}", тип даних: ${typeof y} і це True`);
}