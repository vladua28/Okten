// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let arr = [];

let collector = htmlElement => {
    let className = htmlElement.className

    if (className) {
        className.split(" ").forEach(value => {
            if (arr.indexOf(value) === -1) {
                arr.push(value)
                console.log(value)
            }
        })
    }

    let children = htmlElement.children;
    if (children.length !== 0) {
        for (const child of children) {
            collector(child);
        }
    }
}

collector(document.body);

console.log(arr);
