/* eslint-disable no-undef */

function KeyboardHandler() {}

KeyboardHandler.prototype.handleEvent = function ({ code }) {
  EventEmiter.emit(`key:${code}`);
};
