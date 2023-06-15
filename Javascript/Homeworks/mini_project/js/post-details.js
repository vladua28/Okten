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

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((post) => {
        const postInfo = document.createElement('div');
        const ul = document.createElement('ul');

        for (const key in post) {
            const li = document.createElement('li');
            li.innerText = `${key}: ${post[key]}`;
            ul.appendChild(li);
        }

        postInfo.appendChild(ul);
        wrapper.appendChild(postInfo);
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((comments) => {
        const btnContainer = document.createElement('div');
        const commentsContainer = document.createElement('div');
        const showBtn = document.createElement('button');
        const hideBtn = document.createElement('button');

        btnContainer.append(showBtn, hideBtn);
        wrapper.append(btnContainer, commentsContainer);


        showBtn.innerText = 'Show comments';
        hideBtn.innerText = 'Hide comments';
        hideBtn.style.display = 'none';

        showBtn.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then((response) => response.json())
                .then((comments) => {
                    comments.forEach((comment) => {
                        const block = document.createElement('div');
                        const name = document.createElement('h4');
                        const email = document.createElement('p');
                        const body = document.createElement('p');

                        name.textContent = comment.name;
                        email.textContent = comment.email;
                        body.textContent = comment.body;

                        block.append(name, email, body);
                        commentsContainer.appendChild(block);
                    });

                    showBtn.style.display = 'none';
                    hideBtn.style.display = 'block';
                });

        };
        hideBtn.onclick = () => {
            commentsContainer.innerHTML = '';
            hideBtn.style.display = 'none';
            showBtn.style.display = 'block';
        };
    });
