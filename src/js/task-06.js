const refs = {
  inputColor: document.querySelector("#validation-input"),
};
const lengthInput = 6;
// refs.inputColor.addEventListener("focus", onFocusInput);

// function onFocusInput() {
//   console.log("Импут получил фокус - событие focus");
// }

refs.inputColor.addEventListener("blur", onBlurInput);

function onBlurInput() {
  if (refs.inputColor.value.length >= lengthInput) {
    refs.inputColor.classList.add("valid");
    refs.inputColor.classList.remove("invalid");
  } else {
    refs.inputColor.classList.remove("valid");
    refs.inputColor.classList.add("invalid");
  }
}
