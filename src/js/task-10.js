function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// РЕФАКТОРИНГ
const refs = {
  input: document.querySelector("[type='number']"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestory: document.querySelector("[data-destroy]"),
  div: document.querySelector("#controls"),
  divBoxes: document.querySelector("#boxes"),
};

refs.div.addEventListener("click", onClickHandler);

function onClickHandler(event) {
  const btnEvent = event.target.dataset;
  if (btnEvent.hasOwnProperty("create")) {
    onBtnCreateClick();
  } else if (btnEvent.hasOwnProperty("destroy")) {
    onBtnDestroyClick();
  } else {
    return;
  }
}

function onBtnCreateClick() {
  createBoxes(refs.input.value);
  refs.input.value = "";
}

function onBtnDestroyClick() {
  let { value } = refs.input;

  if (!value || value < 0) {
    refs.divBoxes.innerHTML = "";
    return;
  }

  for (let i = 0; i < value; i++) {
    if (i > refs.divBoxes.childElementCount - 1) {
      return;
    }

    refs.divBoxes.lastElementChild.remove();
  }
}

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    refs.divBoxes.append(box);
    size += 10;
  }
}

// const refs = {
//   input: document.querySelector("[type='number']"),
//   btnCreate: document.querySelector("[data-create]"),
//   btnDestory: document.querySelector("[data-destroy]"),
//   div: document.querySelector("#controls"),
//   divBoxes: document.querySelector("#boxes"),
// };
// refs.btnCreate.addEventListener("click", onBtnCreateClick);
// refs.btnDestory.addEventListener("click", onBtnDestroyClick);

// function onBtnCreateClick() {
//   let size = 30;

//   const countInput = refs.input.value;
//   for (let i = 0; i < countInput; i++) {
//     const box = document.createElement("div");
//     box.style.width = size + "px";
//     box.style.height = size + "px";
//     box.style.backgroundColor = getRandomHexColor();
//     refs.divBoxes.append(box);
//     size += 10;
//   }
//   refs.input.value = "";
// }

// function onBtnDestroyClick() {
//   let countInput = refs.input.value;

//   if (!countInput) {
//     refs.divBoxes.innerHTML = "";
//     return;
//   }

//   const quantity = refs.divBoxes.childElementCount;

//   for (let i = 0; i < countInput; i++) {
//     if (i > quantity - 1) {
//       return;
//     }

//     refs.divBoxes.lastElementChild.remove();
//   }
// }
