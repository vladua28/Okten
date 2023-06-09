const id = new URLSearchParams(location.search).get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
        const ul = document.createElement('ul');
        ul.classList.add('info', 'user-info');

        wrapper.appendChild(ul);

        for (const key in user) {
            const li = document.createElement('li');
            ul.appendChild(li);

            li.innerHTML = `<b>${key}:</b> ${typeof user[key] !== 'object' ? user[key] : ''}`;

            if (typeof user[key] === 'object') {
                const childUl = document.createElement('ul');
                li.appendChild(childUl);
                childUl.classList.add('child-info');

                for (const childKey in user[key]) {
                    const childLi = document.createElement('li');
                    childUl.appendChild(childLi);
                    childLi.innerHTML = `<b>${childKey}:</b> ${typeof user[key][childKey] !== 'object' ? user[key][childKey] : ''}`;

                    if (typeof user[key][childKey] === 'object') {
                        const grandChildUl = document.createElement('ul');
                        childLi.appendChild(grandChildUl);
                        grandChildUl.classList.add('child-info');

                        for (const grandChildKey in user[key][childKey]) {
                            const grandChildLi = document.createElement('li');
                            grandChildUl.appendChild(grandChildLi);
                            grandChildLi.innerHTML = `<b>${grandChildKey}:</b> ${user[key][childKey][grandChildKey]}`;
                        }
                    }
                }
            }
        }

        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response) => response.json())
            .then((posts) => {
                const btnContainer = document.createElement('div');
                const postsContainer = document.createElement('div');
                const showBtn = document.createElement('button');
                const hideBtn = document.createElement('button');

                btnContainer.classList.add('button');

                btnContainer.append(showBtn, hideBtn);
                wrapper.append(btnContainer, postsContainer);

                showBtn.innerText = 'Show posts';
                hideBtn.innerText = 'Hide posts';
                hideBtn.style.display = 'none';

                showBtn.onclick = function () {
                    posts.forEach(post => {
                        const block = document.createElement('div')
                        const title = document.createElement('h3');
                        const btn = document.createElement('button');

                        block.classList.add('block', 'post');
                        title.classList.add('title');
                        btn.classList.add('btn');
                        postsContainer.classList.add('blocks', 'posts');

                        block.append(title, btn)
                        postsContainer.appendChild(block)

                        title.innerText = `${post.id}. ${post.title}`;
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
    });
