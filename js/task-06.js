let textInput = document.querySelector('#validation-input');
let inputLength = textInput.dataset.length;

textInput.addEventListener('input', onInputChange);



function onInputChange(event) {
  const text = event.currentTarget.value;

  if (text.length < inputLength || text.length > inputLength) {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  } else {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
};
