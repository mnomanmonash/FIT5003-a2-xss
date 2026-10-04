fetch('/profile', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'email=35297107-verify%40example.com',
    credentials: 'same-origin'
})
.then(() => {
    window.location = '/profile';
});
