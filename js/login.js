document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('login-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('loginUser').value;
            const pass = document.getElementById('loginPass').value;

            const savedUser = localStorage.getItem('usuario_nombre');
            const savedPass = localStorage.getItem('usuario_pass');

            if (user && savedUser === user && savedPass === pass) {
                messageDiv.textContent = "¡Bienvenido de nuevo! ";
                messageDiv.style.color = "#27ae60";
            } else {
                messageDiv.textContent = "Tu cuenta no existe.";
                messageDiv.style.color = "#e74c3c";
            }
        });
    }
});
