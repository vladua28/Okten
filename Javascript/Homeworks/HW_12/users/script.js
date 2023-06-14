// Зробити файл users.html. З ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів, вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера). При кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача).

let ul = document.createElement('ul');
ul.classList.add('users');
document.body.appendChild(ul);
fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersList = document.querySelector('.users');
        users.forEach(user => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.textContent = `${user.id} - ${user.name}`;
            a.href = `user-details.html?id=${user.id}`;
            li.appendChild(a);
            usersList.appendChild(li);
        });
    });