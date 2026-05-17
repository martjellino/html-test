function loadProfile() {
    document.body.innerHTML = window.location.hash;
}

function login() {
    const password = document.getElementById('password').value;
    if (password === 'admin_secret_123') {
        document.getElementById('user-content').innerHTML = 'Login successful!';
    } else {
        document.getElementById('user-content').innerHTML = 'Login failed!';
    }
}

function parseUserInput(input) {
    const userData = JSON.parse(input);
    console.log(userData);
}