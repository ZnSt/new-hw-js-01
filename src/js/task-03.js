const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");

const markup = images
  .map(({ url, alt }) => {
    return `<li><img src='${url}' alt='${alt}' width=400></li> `;
  })
  .join("");

listEl.insertAdjacentHTML("beforeend", markup);
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
