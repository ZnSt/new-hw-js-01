function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  divEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("[type='number']"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", desctroyBoxes);

function createBoxes() {
  const amount = Number(refs.inputEl.value);
  const newArr = [];
  let counter = 30;
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${counter}px`;
    newDiv.style.height = `${counter}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    counter += 10;

    newArr.push(newDiv);
  }

  refs.divEl.append(...newArr);
}

function desctroyBoxes() {
  refs.divEl.innerHTML = "";
}
