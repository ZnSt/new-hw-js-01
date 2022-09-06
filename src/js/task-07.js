// const refs = {
//   inputSizeControl: document.querySelector("#font-size-control"),
//   spanSizeControl: document.querySelector("#text"),
// };

// refs.inputSizeControl.addEventListener("input", onInputFn);

// function onInputFn(event) {
//   refs.spanSizeControl.style.fontSize = event.currentTarget.value + "px";
// }

const parent = document.querySelector("#parent");

parent.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});
