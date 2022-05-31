let textInput = document.querySelector('#validation-input');
let inputLength = textInput.dataset.length;

textInput.addEventListener('input', onInputChange);



function onInputChange(event) {
  const text = event.currentTarget.value;

  if (text.length >= inputLength) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid')
  }
};
