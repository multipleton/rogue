/* eslint-disable no-undef */

function KeyboardHandler() {
  this.keys = [
    'Space',
  ];
}

KeyboardHandler.prototype.handleEvent = function ({ code }) {
  if (!this.keys.includes(code)) return;
  EventEmiter.emit(`key:${code}`);
};
