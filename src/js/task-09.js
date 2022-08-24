const refs = {
  btnColor: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
  body: document.body,
};
console.dir(refs.body.style.backgroundColor);

refs.btnColor.addEventListener("click", onClickBtnColor);

function onClickBtnColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
