const refs = {
  inputId: document.querySelector("#name-input"),
  spanId: document.querySelector("#name-output"),
};

refs.inputId.addEventListener("input", onInputText);

function onInputText(event) {
  if (refs.inputId.value === "") {
    refs.spanId.textContent = "Anonymous";
  } else {
    refs.spanId.textContent = event.currentTarget.value;
  }
}
