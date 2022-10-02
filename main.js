const Elements = {
  field: document.getElementById('field'),
  message: document.getElementById('message'),
  moreBreak: document.getElementById('more-break'),
};

// eslint-disable-next-line no-undef
const messageBox = new MessageBox(
  Elements.message,
  Elements.moreBreak,
);

// eslint-disable-next-line no-undef
const keyboardHandler = new KeyboardHandler();
document.addEventListener('keydown', keyboardHandler);

messageBox.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet molestie nisi, quis dictum nisl. Phasellus at tellus vulputate, placerat tortor suscipit, laoreet neque. Maecenas bibendum, justo in fermentum. Lorem lorem');
