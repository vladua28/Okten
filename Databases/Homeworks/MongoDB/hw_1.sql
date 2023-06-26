use my_db

db.users.insertMany([
    {
        name: 'Alex', age: 25, gender: 'male', address: {
            city: 'Lviv',
            street: 'Chornovola',
            house: 25,
            flat: 12
        },
        parents: [
            'Vasia',
            'Masha',
        ],
        rating: 5,
        studying: ['js','java']
    },
    {
        name: 'Natalii', age: 29, gender: 'female', address: {
            city: 'Lviv',
            street: 'Marko Vovchok',
            house: 45,
            flat: 45
        },
        parents: [
            'Igor',
            'Nina',
        ],
        rating: 4,
        studying: ['python','java', 'css']
    },
    {
        name: 'Alexsandr', age: 34, gender: 'male', address: {
            city: 'Lviv',
            street: 'Kitayska',
            house: 10,
            flat: 5
        },
        parents: [
            'Petro',
            'Alina',
        ],
        rating: 2,
        studying: ['js','java','html']
    },
    {
        name: 'Sergii', age: 12, gender: 'male',
        parents: [
            'Anton',
            'Tamara',
        ],
        rating: 4,
        studying: ['node','java', 'css','mongo','mysql']
    },
    {
        name: 'Igor', age: 45, gender: 'male', address: {
            city: 'Kyiv',
            street: 'Shevchenko',
            house: 100,
            flat: 66
        },
        parents: [
            'Igor',
            'Igor',
        ],
        rating: 5,
        studying: ['java','node']
    },
    {
        name: 'Eva', age: 26, gender: 'female', address: {
            city: 'Odessa',
            street: 'Derebasovska',
            house: 4,
        },
        parents: [
            'Masha'
        ],
        rating: 2,
        studying: ['js']
    },
    {
        name: 'Kira', age: 49, gender: 'female', address: {
            city: 'Uzgorod',
            street: 'Doroshenka',
            house: 201,
            flat: 1
        },
        parents: [
            'Vitaliy',
            'Olha',
        ],
        rating: 2,
        studying: ['java']
    },
    {
        name: 'Vova', age: 16, gender: 'male', address: {
            city: 'Uzgorod',
            street: 'Bethoven',
            house: 2,
            flat: 145
        },
        rating: 3
    }

])

db.users.find()

// 1) Знайти всіх юзерів в кого вік менше за 20
db.users.find(
    {age: {$lt: 20}}
    )

// 2) Знайти всіх юзерів в котрих хоча б один з батьків Tamara або Petro
db.users.find({
    $or: [
        {parents: 'Tamara'},
        {parents: 'Petro'}
    ]
})

// 3) Знайти всіх юзерів які вивчають js
db.users.find(
    {studying: 'js'}
    )

// 4) Знайти всіх юзерів котрі вивчають тільки один предмет і додати їм java
db.users.updateMany(
    {studying:{$size:1}},
    {$push:{studying: 'java'}}
    )

// 5) Знайти всіх юзерів, номери будинків яких знаходяться в межах 1-20
db.users.find(
    {'address.house': {$gte:1, $lte: 20}}
    )

// 6) Знайти всіх юзерів в яких назва вулиці містить пробіл
db.users.find(
    {"address.street": {$regex: '.* .*'}}
    )

// 7) Видалити всіх юзерів в котрих немає поля studying
db.users.deleteMany(
    {studying: {$exists: 0}}
    )

// 8) Знайти всіх юзерів в котрих в ім'я когось с батьків закінчується на 'na'
db.users.find(
    {parents: {$regex: '^.*na$'}}
    )

// 9) Всім юзерам котрі не вивчають python додати його
db.users.updateMany(
    {studying: {$ne: 'python'}},
    {$push:{studying: 'python'}}
    )

// 10) Посортувати юзерів по рейтингу та по номеру квартири (що то що то, від більшого меншого)
db.users.find().sort(
    {rating: -1, 'address.house': -1}
    )

// Додаткові:
// 1) Знайти останні два записи
db.users.find().sort({_id: -1}).limit(2)

// 2) Вивести всіх юзерів але не показувати місто
db.users.find(
    {},
    {'address.city': 0}
    )

// 3) всіх юзерів старше 25 років позбавити батьків
db.users.updateMany(
    {age: {$gt: 25}},
    {$pull: {parents: {$exists: 1}}}
    )

// 4) видалити юзерів, в котрих номер квартири та будинку дорівнює 45
db.users.deleteMany(
    {'address.house': 45, 'address.flat': 45}
    )