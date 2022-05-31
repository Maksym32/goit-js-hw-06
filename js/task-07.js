
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', (event) => {
  const size = inputEl.value;
  textEl.style.fontSize = size + "px"
})