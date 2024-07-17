function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {

  boxesContainer.innerHTML = '';
  
  let size = 30;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim());
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  } else {
    alert('All form fields must be filled in');
  }
});

destroyButton.addEventListener('click', destroyBoxes);

