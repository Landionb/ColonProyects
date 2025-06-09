// Variables del juego
let playerHand = [];
let opponentHand = [];

// Inicializar el juego
function initGame() {
    const playerHandElement = document.getElementById('player-hand');
    const opponentHandElement = document.getElementById('opponent-hand');
    
    // Limpiar manos anteriores
    playerHandElement.innerHTML = '';
    opponentHandElement.innerHTML = '';
    
    // Crear cartas de ejemplo para el jugador
    playerHand = [];
    for (let i = 0; i < 5; i++) {
        const card = {
            id: `player-card-${i}`,
            name: `Carta ${i + 1}`,
            description: `Descripción de la carta ${i + 1}`,
            power: Math.floor(Math.random() * 10) + 1
        };
        playerHand.push(card);
        createCardElement(card, playerHandElement, true);
    }
    
    // Crear cartas de ejemplo para el oponente
    opponentHand = [];
    for (let i = 0; i < 5; i++) {
        const card = {
            id: `opponent-card-${i}`,
            name: `Carta ${i + 1}`,
            description: `Descripción de la carta ${i + 1}`,
            power: Math.floor(Math.random() * 10) + 1
        };
        opponentHand.push(card);
        createCardElement(card, opponentHandElement, false);
    }
}

// Crear elemento de carta
function createCardElement(cardData, container, isPlayer) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.id = cardData.id;
    
    // Contenido frontal de la carta
    const frontContent = document.createElement('div');
    frontContent.className = 'card-front';
    frontContent.innerHTML = `
        <div class="card-name">${cardData.name}</div>
        <div class="card-power">${cardData.power}</div>
    `;
    
    cardElement.appendChild(frontContent);
    
    // Efecto hover para mostrar más información (solo para el jugador)
    if (isPlayer) {
        const backContent = document.createElement('div');
        backContent.className = 'card-back';
        backContent.innerHTML = `
            <div class="card-description">${cardData.description}</div>
        `;
        backContent.style.display = 'none';
        cardElement.appendChild(backContent);
        
        cardElement.addEventListener('mouseenter', () => {
            frontContent.style.display = 'none';
            backContent.style.display = 'flex';
            cardElement.style.transform = 'translateY(-20px) scale(1.3) rotateY(180deg)';
            cardElement.style.zIndex = '100';
        });
        
        cardElement.addEventListener('mouseleave', () => {
            frontContent.style.display = 'flex';
            backContent.style.display = 'none';
            cardElement.style.transform = 'translateY(0) scale(1)';
            cardElement.style.zIndex = '1';
        });
        
        // Click en la carta para jugarla
        cardElement.addEventListener('click', () => playCard(cardData));
    }
    
    container.appendChild(cardElement);
}

// Jugar una carta
function playCard(card) {
    console.log(`Jugando carta: ${card.name}`);
    // Aquí iría la lógica para jugar la carta
    // Por ahora solo la eliminamos de la mano
    const cardIndex = playerHand.findIndex(c => c.id === card.id);
    if (cardIndex !== -1) {
        playerHand.splice(cardIndex, 1);
        document.getElementById(card.id).remove();
    }
    
    // El oponente juega una carta aleatoria
    if (opponentHand.length > 0) {
        const randomIndex = Math.floor(Math.random() * opponentHand.length);
        const opponentCard = opponentHand[randomIndex];
        opponentHand.splice(randomIndex, 1);
        document.getElementById(opponentCard.id).remove();
        
        console.log(`El oponente jugó: ${opponentCard.name}`);
    }
}