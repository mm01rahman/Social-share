function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('cv-container').style.display = 'flex';
    } else {
        alert('Please enter both username and password');
    }
}
