// Зробити файл users.html. З ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів, вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера). При кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача).

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        users.forEach(user => {
            const block = document.createElement('div');
            const title = document.createElement('h2');
            const btn = document.createElement('button');

            block.classList.add('block', 'user');
            title.classList.add('title');
            btn.classList.add('btn');

            block.append(title, btn);
            main.appendChild(block);

            title.innerText = `${user.id}. ${user.name}`;
            btn.innerText = 'User Details';

            btn.onclick = function () {
                location.href = `./pages/user-details.html?id=${user.id}`
            };
        })
    });