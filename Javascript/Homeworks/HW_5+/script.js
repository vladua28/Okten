// Всі функції повинні бути описані стрілочним типом!!!!
// 1 - створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)
const minNum = (num1, num2, num3) => (num1 < num2 && num1 < num3) ? num1 : ((num2 < num1 && num2 < num3) ? num2 : num3);
console.log(minNum(20, 5, 10));

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const maxNum = (num1, num2, num3) => (num1 > num2 && num1 > num3) ? num1 : ((num2 > num1 && num2 > num3) ? num2 : num3);
console.log(maxNum(20, 5, 10));

// 3 - створити функцію яка повертає найбільше число з масиву
const maxValue = arr => {
    let result = 0;
    for (const num of arr) {
        if (num > result) {
            result = num;
        }
    }
    return result;
}
console.log(maxValue([-10, 20, 30]));

// 4 - створити функцію яка повертає найменше число з масиву
const minValue = (...args) => {
    let result = args[0];
    for (const num of args) {
        if (num < result) {
            result = num;
        }
    }
    return result;
}
console.log(minValue(-100, 20, 30));

// 4 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const sumArr = arr => {
    let result = 0;
    for (const num of arr) {
        result += num;
    }
    return result;
}
console.log(sumArr([1, 2, 10]));

// 5 - Дано натуральне число n. Вивести всі числа від 1 до n.
const naturalNum1 = n => {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}
naturalNum1(100);

// 6 - Дані два цілих числа A и В . Виведіть всі числа від A до B включно, в порядку зростання, якщо A < B, або в порядку спадання в іншому випадку.
const naturalNum2 = (A, B) => {
    if (A < B) {
        for (let i = A; i <= B; i++) {
            console.log(i);
        }
    } else if (A > B) {
        for (let i = A; i >= B; i--) {
            console.log(i);
        }
    } else {
        console.log(A);
    }
}
naturalNum2(30, 20)

// 7 - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const foo = (arr, i) => {
    if (i >= 0 && i < arr.length - 1) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}
console.log(foo([9, 8, 0, 4], 0));
console.log(foo([9, 8, 0, 4], 1));
console.log(foo([9, 8, 0, 4], 2));

// 8 - Створити функцію, яка буде переносити елементи з значенням 0 у кінець масиву зберігаючи при цьому порядок ненульових значень.
// Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let swap0 = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        }
    }
    for (let i = 0; result.length < arr.length; i++) {
        result.push(0);
    }
    return result
}
console.log(swap0([1, 0, 6, 0, 3]));
console.log(swap0([0, 1, 2, 3, 4]));
console.log(swap0([0, 0, 1, 0]));