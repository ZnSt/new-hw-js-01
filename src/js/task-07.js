// const refs = {
//   inputSizeControl: document.querySelector("#font-size-control"),
//   spanSizeControl: document.querySelector("#text"),
// };

// refs.inputSizeControl.addEventListener("input", onInputFn);

// function onInputFn(event) {
//   refs.spanSizeControl.style.fontSize = event.currentTarget.value + "px";
// }

const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  console.log(event);
  refs.span.style.fontSize = `${event.currentTarget.value}px`;
}
