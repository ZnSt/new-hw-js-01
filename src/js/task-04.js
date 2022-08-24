let counterValue = 0;

const refs = {
  decrBtn: document.querySelector("[data-action='decrement']"),
  incrBtn: document.querySelector("[data-action='increment']"),
  spanValue: document.querySelector("#value"),
};

// const onDecrFn = () => {
//   counterValue -= 1;
//   refs.spanValue.textContent = counterValue;
// };
// refs.decrBtn.addEventListener("click", onDecrFn);

// const onIncrFn = () => {
//   counterValue += 1;
//   refs.spanValue.textContent = counterValue;
// };
// refs.incrBtn.addEventListener("click", onIncrFn);

const allFnCounter = (event) => {
  if (event.currentTarget.attributes[1].value === "increment") {
    counterValue += 1;
    refs.spanValue.textContent = counterValue;
  } else {
    counterValue -= 1;
    refs.spanValue.textContent = counterValue;
  }

  // if (event.target.attributes[1].nodeValue === "increment") {
  //   counterValue += 1;
  //   refs.spanValue.textContent = counterValue;
  // } else {
  //   counterValue -= 1;
  //   refs.spanValue.textContent = counterValue;
  // }
};
refs.decrBtn.addEventListener("click", allFnCounter);

refs.incrBtn.addEventListener("click", allFnCounter);

// let counterValue = 0;

// const refs = {
//   btnDecrement: document.querySelector("[data-action='decrement']"),
//   btnIncrement: document.querySelector("[data-action='increment']"),
//   valueCounter: document.querySelector("#value"),
// };

// refs.btnDecrement.addEventListener("click", onBtnDecr);
// refs.btnIncrement.addEventListener("click", onBtnIncr);
// window.addEventListener("keydown", onKeydownTap);

// // function onBtnDecr() {
// //   counterValue -= 1;
// //   refs.valueCounter.innerHTML = counterValue;
// // }

// // function onBtnIncr() {
// //   counterValue += 1;
// //   refs.valueCounter.innerHTML = counterValue;
// // }

// function onBtnDecr() {
//   counterValue -= 1;
//   refs.valueCounter.textContent = counterValue;
// }

// function onBtnIncr() {
//   counterValue += 1;
//   refs.valueCounter.textContent = counterValue;
// }

// function onKeydownTap(event) {
//   if (event.code === "Escape") {
//     refs.valueCounter.innerHTML = "";
//   }
// }
