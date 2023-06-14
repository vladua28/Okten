const urlParams = new URLSearchParams(location.search);
const userId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDetails = document.getElementById('user-details');
        Object.entries(user).forEach(([key, value]) => {
            const li = document.createElement('li');
            li.textContent = `${key}: ${value}`;
            userDetails.appendChild(li);
        });
    });