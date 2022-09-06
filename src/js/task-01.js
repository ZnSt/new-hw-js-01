//NUMBER1

// const listEl = document.querySelector("#categories");
// console.log(listEl);

// const itemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: `, itemEl.length);

// const titleEl = document.querySelectorAll("h2");
// const newListEl = document.querySelectorAll(".item ul");
// for (let i = 0; i < titleEl.length; i += 1) {
//   console.log(`Category: `, titleEl[i].textContent);
//   console.log(`Elements: `, newListEl[i].children.length);
// }

//NUMBER2

// const itemRefs = document.querySelectorAll(".item");
// console.log("Number of categories: ", itemRefs.length);
// itemRefs.forEach((element) => {
//   const titleRefs = element.querySelector("h2").textContent;
//   console.log("Category: ", titleRefs);
//   const secondItemRefs = element.querySelectorAll("li");
//   console.log("Elements: ", secondItemRefs.length);
// });

//NUMBER3

const listRefs = document.querySelector("#categories").children;
console.log("Number of categories: ", listRefs.length);

[...listRefs].forEach((element) => {
  const title = element.querySelector("h2").textContent;
  console.log("Category: ", title);

  const lengthEl = element.querySelectorAll("li").length;
  console.log("Elements: ", lengthEl);
});
