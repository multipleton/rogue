const field = document.getElementById('game-field');
const context = field.getContext('2d');

const menuTheme = new Audio('./assets/sound/menu-theme.mp3');
menuTheme.loop = true;
menuTheme.play();

const cover = new Image();
cover.src = './assets/images/cover.png';

cover.onload = () => {
  context.drawImage(cover, 0, 0);
};
