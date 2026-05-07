document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = form.querySelector('input[name="nombre"]').value;
            const pass = form.querySelector('input[name="contrasena"]').value;

            // Guardamos los datos de registro 
            localStorage.setItem('usuario_nombre', nombre);
            localStorage.setItem('usuario_pass', pass);

            //  Cartel de alert
            const banner = document.createElement('div');
            banner.id = 'success-alert';
            banner.textContent = "Registrado con éxito. Tus datos han sido guardados.";
            
            document.body.appendChild(banner);

            // Tiempo de alert
            setTimeout(() => {
                banner.style.opacity = '0';
                setTimeout(() => {
                    banner.remove();
                }, 500);
            }, 4000);
        });
    }
});
