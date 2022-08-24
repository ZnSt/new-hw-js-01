// const refs = {
//   inputId: document.querySelector("#name-input"),
//   spanId: document.querySelector("#name-output"),
// };

// refs.inputId.addEventListener("input", onInputText);

// function onInputText(event) {
//   if (refs.inputId.value === "") {
//     refs.spanId.textContent = "Anonymous";
//   } else {
//     refs.spanId.textContent = event.currentTarget.value;
//   }
// }

const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputEvents);

function onInputEvents(event) {
  if (event.currentTarget.value === "") {
    refs.span.textContent = "Anonymous";
  } else {
    refs.span.textContent = event.currentTarget.value;
  }
}
