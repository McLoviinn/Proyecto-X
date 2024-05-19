window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}


function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}


function abrirChat() {
    var modal = new bootstrap.Modal(document.getElementById('chatModal'));
    modal.show();
}

const chatIcon = document.getElementById('chatIcon');
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const chatMessages = document.getElementById('chatMessages');

// Event listener para mostrar/ocultar el chat al hacer clic en el ícono del robot
chatIcon.addEventListener('click', toggleChat);

// Función para mostrar u ocultar el chat
function toggleChat() {
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
}

// Función para enviar un mensaje del usuario
function sendMessage() {
    const userMessage = userInput.value;
    displayMessage('user', userMessage);
    // Aquí puedes agregar la lógica para que el chatbot responda
    // Por ahora, simplemente mostraremos un mensaje de ejemplo
    setTimeout(() => {
        displayMessage('bot', 'Hola, soy Pepe. ¿En qué puedo ayudarte?');
    }, 1000);
    userInput.value = ''; // Limpiar el campo de entrada después de enviar el mensaje
}

// Función para mostrar un mensaje en el chat
function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'userMessage' : 'botMessage');
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
}
