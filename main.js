// eslint-disable-next-line no-unused-vars
const field = document.getElementById('game-field');

// eslint-disable-next-line no-undef, no-unused-vars
const messageBox = new MessageBox();

// eslint-disable-next-line no-undef, no-unused-vars
const hud = new HUD();

// eslint-disable-next-line no-undef
const director = new Director();

// eslint-disable-next-line no-undef, no-unused-vars
const menu = new Menu();

// eslint-disable-next-line no-undef
const keyboardHandler = new KeyboardHandler();
document.addEventListener('keydown', keyboardHandler);

director.enter();
