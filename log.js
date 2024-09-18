
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');
    const errorMessage = document.getElementById('error-message');

    // Show/hide password
    togglePasswordButton.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        togglePasswordButton.textContent = type === 'password' ? 'Show' : 'Hide';
    });

    // Validate form
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for validation

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Username and password are required.';
        } else if (username.length < 3 || password.length < 6) {
            errorMessage.textContent = 'Username must be at least 3 characters and password at least 6 characters.';
        } else {
            errorMessage.textContent = '';
            alert('Login successful!');
            // You can add AJAX request here to handle actual login
        }
    });
});
