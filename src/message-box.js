// eslint-disable-next-line no-unused-vars
function MessageBox(target, more) {
  this.target = target;
  this.more = more;
  this.buffer = [];
  EventEmiter.subscribe('key:Space', () => this.continue());
}

MessageBox.prototype.write = function (message) {
  if (message.length <= 64) {
    this.buffer.push(message);
  } else {
    const words = message.split(' ');
    let sentence = '';
    for (let i = 0; i < words.length; i++) {
      sentence += words[i];
      sentence += ' ';
      if (sentence.length > 48) {
        this.buffer.push(sentence);
        sentence = [];
      }
    }
    this.buffer.push(sentence);
    this.showMore();
  }
  this.continue();
};

MessageBox.prototype.continue = function () {
  if (this.buffer.length === 0) {
    this.hideMore();
    this.print('');
    return;
  }
  const message = this.buffer.shift();
  this.print(message);
};

MessageBox.prototype.print = function (message) {
  this.target.innerText = message;
};

MessageBox.prototype.showMore = function () {
  this.more.style.visibility = 'visible';
};

MessageBox.prototype.hideMore = function () {
  this.more.style.visibility = 'hidden';
};