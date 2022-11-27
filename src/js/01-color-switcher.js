const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
  span: document.querySelector('span'),
};
let timerId = null;
let count = 0
refs.start.addEventListener('click', changeColor);
refs.stop.addEventListener('click', stopChangeColor);

// console.log(refs.start);


function changeColor() {
  refs.start.setAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.span.textContent = count--
  }, 1000);

  // refs.body.style.backgroundColor = getRandomHexColor()
  //   console.log('click start', getRandomHexColor());
  //   console.log(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopChangeColor() {
  refs.start.removeAttribute('disabled');
  clearInterval(timerId);
}
