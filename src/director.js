function Director() {
  this.stage = null;
  EventEmiter.subscribe('key:F1', () => this.startGame());
  EventEmiter.subscribe('key:F2', () => this.startBot());
  EventEmiter.subscribe('key:F8', () => this.pause());
  EventEmiter.subscribe('key:F9', () => this.exit());
}

Director.Stages = {
  MENU: 'menu',
  GAME: 'game',
  BOT: 'bot',
  PAUSE: 'pause',
};

Director.prototype.enter = function () {
  this.stage = Director.Stages.MENU;
  this.emitStage();
};

Director.prototype.startGame = function () {
  if (this.stage !== Director.Stages.MENU) return;
  this.stage = Director.Stages.GAME;
  this.emitStage();
};

Director.prototype.startBot = function () {
  if (this.stage !== Director.Stages.MENU) return;
  this.stage = Director.Stages.BOT;
  this.emitStage();
};

Director.prototype.pause = function () {
  if (this.stage !== Director.Stages.GAME
    && this.stage !== Director.Stages.BOT) return;
  this.stage = Director.Stages.PAUSE;
  this.emitStage();
};

Director.prototype.exit = function () {
  if (this.stage !== Director.Stages.GAME
    && this.stage !== Director.Stages.BOT) return;
  this.stage = Director.Stages.MENU;
  this.emitStage();
};

Director.prototype.emitStage = function () {
  EventEmiter.emit(`stage:${this.stage}`);
};
