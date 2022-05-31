
let input = document.querySelector('#name-input');
console.log(input);
let output = document.querySelector('#name-output');
console.log(output);

input.addEventListener('input', event => {
  
  input = event.currentTarget.value;

  if (input === '') {
    output = 'Anonymous';
  }
    output.textContent = input;
  // input !== '' ? (output.textContent = input) : 'Anonymous';
});
