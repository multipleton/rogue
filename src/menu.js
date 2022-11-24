function Menu() {
  EventEmiter.subscribe('stage:menu', () => this.showMain());
  EventEmiter.subscribe('stage:pause', () => this.showPause());
  EventEmiter.subscribe('stage:game', () => this.hide());
  EventEmiter.subscribe('stage:bot', () => this.hide());
}

Menu.prototype.show = function () {
  this.context = field.getContext('2d');
  this.menuTheme = new Audio('./assets/sound/menu-theme.mp3');
  this.menuTheme.loop = true;
  this.menuTheme.play();
  const cover = new Image();
  cover.src = './assets/images/cover.png';
  cover.onload = () => {
    this.context.drawImage(cover, 0, 0);
  };
};

Menu.prototype.showMain = function () {
  this.show();
  messageBox.write('Press F1 to play or F2 to start bot...');
};

Menu.prototype.showPause = function () {
  this.show();
  messageBox.write('Game paused. Press Enter to continue...');
};

Menu.prototype.hide = function () {
  this.context.clearRect(0, 0, 800, 600);
  this.menuTheme.pause();
};
