// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

/*{
    id: 1,
        name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
    street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
        lat: '-37.3159',
            lng: '81.1496'
    }
},
    phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
    company: {
    name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
}
}*/

class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company {
    constructor(companyName, catchPhrase, bs) {
        this.companyName = companyName;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

let user1 = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new Geo('-37.3159', '81.1496')), '1-770-736-8031 x56442', 'hildegard.org', new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));

console.log(user1);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//

class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

class Attr {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

let tag1 = new Tag('a',
    'HTML теґ <a> створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання',
    [
        new Attr('href', 'Задає адресу документа, на який слід перейти.'),
        new Attr('target', 'Ім\'я вікна або фрейму, куди браузер буде завантажувати документ.'),
        new Attr('name', 'Встановлює ім\'я якоря всередині документа.')
    ]);

console.log(tag1);

let tag2 = new Tag('div',
    'The <div> tag defines a division or a section in an HTML document.',
    [
        new Attr('class', 'Specifies one or more classnames for an element (refers to a class in a style sheet)'),
        new Attr('id', 'Specifies a unique id for an element'),
        new Attr('tabindex', 'Specifies the tabbing order of an element')
    ]);

console.log(tag2);

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
/*
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]

}*/

