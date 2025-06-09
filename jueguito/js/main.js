// Navegación entre pantallas
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los botones del menú
    const playBtn = document.getElementById('play-btn');
    const deckEditorBtn = document.getElementById('deck-editor-btn');
    const optionsBtn = document.getElementById('options-btn');
    
    // Referencias a los botones de salida
    const exitGameBtn = document.getElementById('exit-game-btn');
    const exitEditorBtn = document.getElementById('exit-editor-btn');
    const exitOptionsBtn = document.getElementById('exit-options-btn');
    
    // Referencias a las pantallas
    const mainMenu = document.getElementById('main-menu');
    const gameScreen = document.getElementById('game-screen');
    const deckEditorScreen = document.getElementById('deck-editor-screen');
    const optionsScreen = document.getElementById('options-screen');
    
    // Event listeners para los botones del menú
    playBtn.addEventListener('click', () => {
        mainMenu.classList.remove('active');
        gameScreen.classList.add('active');
        initGame();
    });
    
    deckEditorBtn.addEventListener('click', () => {
        mainMenu.classList.remove('active');
        deckEditorScreen.classList.add('active');
        initDeckEditor();
    });
    
    optionsBtn.addEventListener('click', () => {
        mainMenu.classList.remove('active');
        optionsScreen.classList.add('active');
    });
    
    // Event listeners para los botones de salida
    exitGameBtn.addEventListener('click', () => {
        gameScreen.classList.remove('active');
        mainMenu.classList.add('active');
    });
    
    exitEditorBtn.addEventListener('click', () => {
        deckEditorScreen.classList.remove('active');
        mainMenu.classList.add('active');
    });
    
    exitOptionsBtn.addEventListener('click', () => {
        optionsScreen.classList.remove('active');
        mainMenu.classList.add('active');
    });
    
    // Deshabilitar el menú contextual (clic derecho)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    // Deshabilitar atajos de teclado (F12, Ctrl+Shift+I, etc.)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.shiftKey && e.key === 'J') || 
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    });
});