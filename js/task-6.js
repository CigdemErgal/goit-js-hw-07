function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.querySelector("input");
const createBtn = controlsEl.querySelector("[data-create]");
const destroyBtn = controlsEl.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  if (amount < 1 || amount > 100) return;

  destroyBoxes();
  createBoxes(amount);
  inputEl.value = "";
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  inputEl.value = "";
});

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elements.push(divEl);
    size += 10;
  }

  boxesEl.append(...elements);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
