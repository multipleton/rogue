/* eslint-disable no-console */
function UIRenderer() {}

UIRenderer.write = data => {
  // eslint-disable-next-line no-undef
  const expanded = expandObject(data);
  expanded.forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`element with id ${id} not found`);
      return;
    }
    element.innerText = value;
  });
};

UIRenderer.show = id => {
  const element = document.getElementById(id);
  if (!element) {
    console.error(`element with id ${id} not found`);
  }
  element.style.visibility = 'visible';
};

UIRenderer.hide = id => {
  const element = document.getElementById(id);
  if (!element) {
    console.error(`element with id ${id} not found`);
  }
  element.style.visibility = 'hidden';
};
