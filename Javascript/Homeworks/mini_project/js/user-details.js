//      В index.html:
// 1. отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2. Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3. Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//      На сторінці user-details.html:
// 4. Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5. Додати кнопку "posts of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6. Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//      На сторінці post-details.html:
// 7. Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8. Нижче інформації про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
//      Стилизація проєкта:
//  index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
//  user-details.html - блок з інфою про user зверху сторінки. Кнопка нижче, на 90% ширини сторінки, по центру.
//  блоки з короткою інфою про post - в ряд по 5 .
//  post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//  Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд).

const id = new URLSearchParams(location.search).get('id');
const wrapper = document.getElementsByClassName('wrapper')[0];


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
        const ul = document.createElement('ul');

        wrapper.appendChild(ul);

        for (const key in user) {
            const li = document.createElement('li');

            ul.appendChild(li);

            li.textContent = `${key}: ${typeof user[key] !== 'object' ? user[key] : ''}`;

            if (typeof user[key] === 'object') {
                const childUl = document.createElement('ul');
                li.appendChild(childUl);

                for (const childKey in user[key]) {
                    const childLi = document.createElement('li');
                    childUl.appendChild(childLi);
                    childLi.textContent = `${childKey}: ${typeof user[key][childKey] !== 'object' ? user[key][childKey] : ''}`;

                    if (childKey === 'geo' && typeof user[key][childKey] === 'object') {
                        const grandChildUl = document.createElement('ul');
                        childLi.appendChild(grandChildUl);

                        for (const grandChildKey in user[key][childKey]) {
                            const grandChildLi = document.createElement('li');
                            grandChildUl.appendChild(grandChildLi);
                            grandChildLi.textContent = `${grandChildKey}: ${user[key][childKey][grandChildKey]}`;
                        }
                    }
                }
            }
        }
    });

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then((posts) => {
        const btnContainer = document.createElement('div');
        const postsContainer = document.createElement('div');
        const showBtn = document.createElement('button');
        const hideBtn = document.createElement('button');

        btnContainer.append(showBtn, hideBtn);
        wrapper.append(btnContainer, postsContainer);

        showBtn.innerText = 'Show posts';
        hideBtn.innerText = 'Hide posts';
        hideBtn.style.display = 'none';

        showBtn.onclick = function () {
            posts.forEach(post => {
                const block = document.createElement('div')
                const title = document.createElement('h4');
                const btn = document.createElement('button');

                block.append(title, btn)
                postsContainer.appendChild(block)

                title.innerText = post.title;
                btn.innerText = 'Post Details';

                btn.onclick = function () {
                    location.href = `../pages/post-details.html?id=${post.id}`;
                };
            });
            showBtn.style.display = 'none';
            hideBtn.style.display = 'block';
        };
        hideBtn.onclick = function () {
            postsContainer.innerHTML = '';
            hideBtn.style.display = 'none';
            showBtn.style.display = 'block';
        }
    });
