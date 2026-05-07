function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = '../img/passopen.jpg';
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = '../img/passclose.jpg';
    }
}

// Add event listener when the script loads or when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const toggleIcon = document.getElementById('togglePassword');
    if (toggleIcon) {
        toggleIcon.addEventListener('click', togglePassword);
    }
});
