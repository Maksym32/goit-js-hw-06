let counterValue = document.querySelector('#value');

let valueEl = Number(document.querySelector('#value').textContent);

const decrementButton = document.querySelector('#counter').firstElementChild;
const incrementButton = document.querySelector('#counter').lastElementChild;

decrementButton.addEventListener('click', () => {
  valueEl -= 1;
  counterValue.textContent = valueEl
});


incrementButton.addEventListener('click', () => {
  valueEl += 1;
  counterValue.textContent = valueEl;
});
