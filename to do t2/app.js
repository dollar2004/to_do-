// Utility functions
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

// Login
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        showPage('todo-page');
    } else {
        alert('Invalid username or password');
    }
}

// Sign Up
function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert('Account created successfully!');
        showLogin();
    } else {
        alert('Please enter a username and password');
    }
}

function showLogin() {
    showPage('login-page');
}

function showSignUp() {
    showPage('signup-page');
}

// Add Task
function addTask() {
    const task = document.getElementById('new-task').value;
    if (task) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => taskList.removeChild(listItem);

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        document.getElementById('new-task').value = '';
    }
}

// Logout
function logout() {
    showLogin();
}

// Initialize app
showLogin();
