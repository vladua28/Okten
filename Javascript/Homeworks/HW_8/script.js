// 1.1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// 1.2 - створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
for (let i = 0; i < 10; i++) {
    users.push(new User(Math.floor(Math.random() * 100), `name${i + 1}`, `surname${i + 1}`, `email${i + 1}`, `phone${i + 1}`));
}
console.log(users);

// 1.3 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter((user) => user.id % 2 === 0 && user.id !== 0);
console.log(filteredUsers);
// 1.4 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = filteredUsers.sort((a, b) => a.id - b.id);
console.log(sortedUsers);
// 1.5 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }

}

let clients = [];

let ordersArr = order => {
    let products = []
    for (let i = 0; i < Math.floor(Math.random() * (10 - 1 + 1) + 1); i++) {
        products.push('product' + i);
    }
    return products
}


for (let i = 0; i < 10; i++) {
    let client = new Client(
        i,
        `Name${i + 1}`,
        `Surname${i + 1}`,
        `email${i + 1}@domain.com`,
        `phone${i + 1}`,
        ordersArr()
    );
    clients.push(client);
}

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarConstructor(model, producer, yearOfProduction, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.yearOfProduction = yearOfProduction;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = () => console.log(`Їдемо зі шкидкістю ${this.maxSpeed} км/год.`);

    this.info = () => {
        Object.keys(this).forEach(
            key => {
                if (typeof this[key] !== "function") console.log(`${key} - ${this[key]}`)
            });
    }

    this.increaseMaxSpeed = (newSpeed) => {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    }

    this.changeYear = (newValue) => {
        this.yearOfProduction = newValue;
        console.log(this.yearOfProduction)
    }

    this.addDriver = (driver) => {
        this.driver = driver;
    }
}

car2 = new CarConstructor('Запорожець', 'ЗАЗ', 1950, 70, 1.5)
car2.drive()
car2.info()
car2.increaseMaxSpeed(20);
car2.changeYear(1975);
car2.addDriver({name: 'vasya'})
console.log(car2.driver);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, yearOfProduction, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.yearOfProduction = yearOfProduction;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі шкидкістю ${this.maxSpeed} км/год.`)
    }

    info() {
        Object.keys(this).forEach(
            key => {
                console.log(`${key} - ${this[key]}`)
            });
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    }

    changeYear(newValue) {
        this.yearOfProduction = newValue;
        console.log(this.yearOfProduction)
    }

    addDriver(driver) {
        this.driver = driver;
    }
}


car1 = new Car('Запорожець', 'ЗАЗ', 1970, 80, 1.2)
car1.drive()
car1.info()
car1.increaseMaxSpeed(20);
car1.changeYear(1980);
car1.addDriver({name: 'vasya'})
console.log(car1.driver);
