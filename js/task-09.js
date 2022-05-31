
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('.change-color');
const backGroundColor = document.querySelector('body');
const textColor = document.querySelector('.color');

button.addEventListener('click', changeColor);


function changeColor() {
  const hexColor = getRandomHexColor();
  backGroundColor.style.backgroundColor = hexColor;
  textColor.textContent = hexColor
}