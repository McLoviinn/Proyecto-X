function closeMessage() {
    document.getElementById("errorMessages").style.display = 'none';
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessages = document.getElementById("errorMessages");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      errorMessages.style.display = 'none'; 
      errorMessages.innerHTML = ''; 
  
      // Validaciones
      let valid = true;
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      let messages = [];
  
      // Validación de email
      if (!validateEmail(email)) {
        valid = false;
        messages.push("Por favor, ingrese un email válido.");
      }
  
      // Validación de contraseña
      if (password.length < 6) {
        valid = false;
        messages.push("La contraseña debe tener al menos 6 caracteres.");
      }
  
      if (valid) {
        // Si todas las validaciones pasan, mostrar un mensaje de éxito y enviar el formulario
        showMessage("Formulario enviado correctamente.", "success");
        // Aquí puedes agregar la lógica para el envío del formulario real, por ejemplo, usando AJAX
        // loginForm.submit(); // Esto enviaría el formulario
      } else {
        // Mostrar mensajes de error en la página
        showMessage(messages.join('<br>'), "error");
      }
    });
  
    // Función para validar el formato del email
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    // Función para mostrar mensajes
    function showMessage(message, type) {
      errorMessages.style.display = 'block';
      errorMessages.style.backgroundColor = type === 'success' ? '#ddffdd' : '#ffdddd';
      errorMessages.style.color = type === 'success' ? '#007700' : '#d8000c';
      errorMessages.innerHTML = `<span class="close-btn" onclick="closeMessage()">×</span><p>${message}</p>`;
    }
  });
  