//      В index.html:
// 1. отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2. Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3. Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//      Стилизація проєкта:
//  index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
//  user-details.html - блок з інфою про user зверху сторінки. Кнопка нижче, на 90% ширини сторінки, по центру.
//  блоки з короткою інфою про post - в ряд по 5 .
//  post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//  Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд).

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        const wrapper = document.getElementsByClassName('wrapper')[0]
        users.forEach(user => {
            const block = document.createElement('div');
            const title = document.createElement('h3');
            const btn = document.createElement('button');

            block.append(title, btn);
            wrapper.appendChild(block);

            title.innerText = `${user.id}. ${user.name}`;
            btn.innerText = 'Details';

            btn.onclick = function () {
                location.href = `./pages/user-details.html?id=${user.id}`
            };
        })
    });
