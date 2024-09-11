/*===== FOCUS AND BLUR FUNCTIONALITY =====*/
const inputs = document.querySelectorAll(".form__input");

/*=== Add focus class to parent container ===*/
function handleFocus() {
    const parent = this.closest(".form__div");
    parent.classList.add("focus");
}

/*=== Remove focus class if input is empty ===*/
function handleBlur() {
    const parent = this.closest(".form__div");
    if (this.value.trim() === "") {
        parent.classList.remove("focus");
    }
}

/*=== Attach focus and blur events to each input ===*/
inputs.forEach(input => {
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
});

/*===== LOGIN FUNCTIONALITY =====*/
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login credentials check
    if (username === 'asad' && password === 'password') {
        // Store session data in localStorage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', username);

        // Redirect to index.html
        window.location.href = 'D:\OneDrive\Desktop\StudentDashBoard\index.html';
    } else {
        alert('Invalid username or password');
    }
}

// If the user is already logged in, redirect to index.html
if (localStorage.getItem('isLoggedOut')) {
    window.location.href = 'login.html';
}

/*=== Attach login event listener ===*/
document.getElementById('loginForm').addEventListener('submit', handleLogin);
