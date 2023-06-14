const id = new URLSearchParams(location.search).get('id');


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
        const block = document.getElementsByClassName('wrapper')[0];

        const ul = document.createElement('ul');
        block.appendChild(ul);
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