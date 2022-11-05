// eslint-disable-next-line no-unused-vars
const field = document.getElementById('field');

// eslint-disable-next-line no-undef
const messageBox = new MessageBox();

// eslint-disable-next-line no-undef
const hud = new HUD();

// eslint-disable-next-line no-undef
const keyboardHandler = new KeyboardHandler();
document.addEventListener('keydown', keyboardHandler);

messageBox.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet molestie nisi, quis dictum nisl. Phasellus at tellus vulputate, placerat tortor suscipit, laoreet neque. Maecenas bibendum, justo in fermentum. Lorem lorem');
hud.print();
hud.update({ strength: { max: 5 } });
