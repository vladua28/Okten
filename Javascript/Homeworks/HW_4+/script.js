// 1 - створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)
function minNum(num1, num2, num3) {
    return (num1 < num2 && num1 < num3) ? num1 : ((num2 < num1 && num2 < num3) ? num2 : num3);
}

console.log(minNum(20, 5, 10));

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum(num1, num2, num3) {
    return (num1 > num2 && num1 > num3) ? num1 : ((num2 > num1 && num2 > num3) ? num2 : num3);
}

console.log(maxNum(20, 5, 10));

// 3 - створити функцію яка повертає найбільше число з масиву
function maxValue(arr) {
    let result = 0;
    for (const num of arr) {
        if (num > result) {
            result = num;
        }
    }
    return result;
}

console.log(maxValue([10, 20, 30]));

// 4 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function avgNum(arr) {
    let result = 0;
    for (const num of arr) {
        result += num;
    }
    return result / arr.length;
}

console.log(avgNum([5, 10, 20, 25, 30, 35, 45]));

// 5 - створити функцію яка приймає будь-яку кількість чисел, повертає найменше, а виводить найбільше (Math використовувати заборонено);
function nums(...numbers) {
    let minResult = numbers[0];
    let maxResult = numbers[0];
    for (const number of numbers) {
        if (minResult > number) {
            minResult = number;
        } else if (maxResult < number) {
            maxResult = number;
        }
    }
    console.log(`Найбільше число: ${maxResult}`);
    return minResult;
}

console.log(`Найменше число: ${nums(-10, 4, 8)}`);

// 6 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function rand1() {
    let arrRand = [];
    for (let i = 0; i < 10; i++) {
        arrRand[i] = Math.round(Math.random() * 100);
    }
    return arrRand;
}

console.log(rand1(100));

// 7 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function rand2(limit) {
    let arrRand = [];
    for (let i = 0; i < 10; i++) {
        arrRand[i] = Math.round(Math.random() * limit);
    }
    return arrRand;
}

console.log(rand2(100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverse(oldArr) {
    let newArr = [];
    for (let i = oldArr.length - 1; i >= 0; i--) {
        newArr.push(oldArr[i]);
    }
    return newArr;
}

console.log(reverse([1, 2, 3]));

// 8 - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function args() {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length > 1) {
        let result = arguments[0] + arguments[1];
        console.log(result);
    }
}

args(1000);
args(100, 500);
// 9 - створити функцію  яка приймає два масиви та сумує значення елементів з однаковими індексами  та повертає новий результуючий масив.
// EXAMPLE: [1,2,3,4], [2,3,4,5] результат: [3,5,7,9]
function sumArr(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i] + arr2[i]);
    }
    return newArr;
}

console.log(sumArr([1, 2, 3, 4], [2, 3, 4, 5]));


// - 10 Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function keysFromArr(arr) {
    let keys = [];
    for (let item of arr) {
        for (let key in item) {
            keys.push(key);
        }
    }
    return keys;
}

console.log(keysFromArr([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// 11 - Створити функцію яка приймає масив будь яких об'єктів та повертає масив значень всіх об'єктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function objFromArr(arr) {
    let values = [];
    for (let item of arr) {
        for (let key in item) {
            values.push(item[key]);
        }
    }
    return values;
}

console.log(objFromArr([{name: 'Dima', age: 13}, {model: 'Camry'}]));