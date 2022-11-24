// eslint-disable-next-line no-unused-vars
function HUD() {
  this.indicators = {
    level: 0,
    hits: {
      current: 0,
      max: 0,
    },
    strength: {
      current: 0,
      max: 0,
    },
    gold: 0, // change to something else
    armor: 0,
  };
  EventEmiter.subscribe('stage:menu', () => this.hide());
  EventEmiter.subscribe('stage:pause', () => this.hide());
  EventEmiter.subscribe('stage:game', () => this.show());
  EventEmiter.subscribe('stage:bot', () => this.show());
}

HUD.prototype.update = function (indicators) {
  // eslint-disable-next-line no-undef
  deepCopy(this.indicators, indicators);
  this.print();
};

HUD.prototype.print = function () {
  // eslint-disable-next-line no-undef
  UIRenderer.write(this.indicators);
};

HUD.prototype.hide = function () {
  // eslint-disable-next-line no-undef
  UIRenderer.hide('hud');
};

HUD.prototype.show = function () {
  // eslint-disable-next-line no-undef
  UIRenderer.show('hud');
};
