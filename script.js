// Function to retrieve user data from local storage
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Function to save user data to local storage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to sign up a new user
function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const users = getUsers();

    if (username && password) {
        // Check if username already exists
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            alert('Username already exists. Please choose another one.');
            return;
        }

        // Add new user to the array
        users.push({ username, password });
        saveUsers(users);
        console.log(users);
        alert('Sign up successful!');
    } else {
        alert('Please enter both username and password.');
    }
}

// Function to log in a user
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const users = getUsers();

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

// Function to delete a user account
function deleteAccount() {
    const username = document.getElementById('delete-username').value;
    const password = document.getElementById('delete-password').value;
    let users = getUsers();

    const index = users.findIndex(user => user.username === username && user.password === password);
    if (index !== -1) {
        users.splice(index, 1);
        saveUsers(users);
        alert('Account deleted successfully!');
    } else {
        alert('Invalid username or password.');
    }
}
