document.addEventListener("DOMContentLoaded", function () {
    const feedbackContainer = document.getElementById('customer-feedback');
    
    // Array de mensajes predefinidos
    const mensajes = [
        "¡Este producto es increíble! Lo recomiendo totalmente.",
        "He quedado impresionado con la calidad de este producto. Definitivamente volveré a comprar.",
        "Gracias por este producto maravilloso. Ha superado mis expectativas.",
        "Excelente producto. ¡No puedo esperar a probar más de sus productos!",
        "Increíble servicio al cliente. ¡Volveré pronto por más!",
        "Estoy muy contento con mi compra. ¡Gracias por todo!",
        "Producto de alta calidad a un precio asequible. ¡Muy recomendable!",
        "¡Me encanta este producto! Definitivamente volveré a comprar aquí.",
        "¡El mejor producto que he comprado! 10/10",
        "¡No puedo creer lo bueno que es este producto! ¡Simplemente asombroso!"
    ];

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const characters = data.results.slice(0, 10); 

            characters.forEach((character, index) => {
                const feedbackCard = document.createElement('div');
                feedbackCard.className = `carousel-item ${index === 0 ? 'active' : ''}`;

                const cardContent = document.createElement('div');
                cardContent.className = 'card1';

                const characterImage = document.createElement('img');
                characterImage.src = character.image;
                characterImage.alt = character.name;

                const characterName = document.createElement('h4');
                characterName.textContent = character.name;

                const characterFeedback = document.createElement('p');

                const randomIndex = Math.floor(Math.random() * mensajes.length);
                characterFeedback.textContent = mensajes[randomIndex];

                cardContent.appendChild(characterImage);
                cardContent.appendChild(characterName);
                cardContent.appendChild(characterFeedback);

                feedbackCard.appendChild(cardContent);
                feedbackContainer.appendChild(feedbackCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
