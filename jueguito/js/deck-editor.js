// Editor de baraja
function initDeckEditor() {
    const cardList = document.querySelector('.card-list');
    cardList.innerHTML = '';
    
    // Cartas de ejemplo
    const exampleCards = [
        { id: 1, name: 'Dragón Rojo', type: 'Criatura', power: 8, description: 'Un poderoso dragón que escupe fuego.' },
        { id: 2, name: 'Hechicero', type: 'Personaje', power: 3, description: 'Lanza hechizos poderosos.' },
        { id: 3, name: 'Curación', type: 'Hechizo', power: 0, description: 'Restaura 5 puntos de vida.' },
        { id: 4, name: 'Guerrero', type: 'Criatura', power: 5, description: 'Un valiente guerrero listo para la batalla.' },
        { id: 5, name: 'Trampa', type: 'Artefacto', power: 0, description: 'Inflige 3 puntos de daño cuando se activa.' },
        { id: 6, name: 'Elfo', type: 'Criatura', power: 4, description: 'Ágil y preciso con el arco.' },
        { id: 7, name: 'Bola de Fuego', type: 'Hechizo', power: 0, description: 'Inflige 6 puntos de daño.' },
        { id: 8, name: 'Escudo', type: 'Artefacto', power: 0, description: 'Bloquea 4 puntos de daño.' }
    ];
    
    // Mostrar cartas disponibles
    exampleCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'editor-card';
        cardElement.innerHTML = `
            <div class="editor-card-name">${card.name}</div>
            <div class="editor-card-type">${card.type}</div>
            <div class="editor-card-power">Fuerza: ${card.power}</div>
            <button class="add-to-deck-btn" data-card-id="${card.id}">Añadir</button>
        `;
        cardList.appendChild(cardElement);
    });
    
    // Botón para añadir carta
    document.getElementById('add-card-btn').addEventListener('click', () => {
        // Aquí iría la lógica para añadir una nueva carta personalizada
        alert('Funcionalidad para añadir nueva carta en desarrollo.');
    });
    
    // Botón para guardar baraja
    document.getElementById('save-deck-btn').addEventListener('click', () => {
        // Aquí iría la lógica para guardar la baraja
        alert('Baraja guardada correctamente.');
    });
}