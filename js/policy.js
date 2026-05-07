document.addEventListener('DOMContentLoaded', () => {
    const privacyCheckbox = document.querySelector('input[name="privacidad"]');
    const submitButton = document.querySelector('input[type="submit"]');

    if (privacyCheckbox && submitButton) {
        // Deshabilitar el botón de enviar 
        submitButton.disabled = !privacyCheckbox.checked;
        
      
        if (submitButton.disabled) {
            submitButton.style.opacity = '0.6';
            submitButton.style.cursor = 'not-allowed';
        }

           
        privacyCheckbox.addEventListener('change', () => {
            submitButton.disabled = !privacyCheckbox.checked;
            
            // Actualizar 
            if (submitButton.disabled) {
                submitButton.style.opacity = '0.6';
                submitButton.style.cursor = 'not-allowed';
            } else {
                submitButton.style.opacity = '1';
                submitButton.style.cursor = 'pointer';
            }
        });
    }
});
