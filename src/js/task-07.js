const refs = {
  inputSizeControl: document.querySelector("#font-size-control"),
  spanSizeControl: document.querySelector("#text"),
};

refs.inputSizeControl.addEventListener("input", onInputFn);

function onInputFn(event) {
  refs.spanSizeControl.style.fontSize = event.currentTarget.value + "px";
}
