const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

//1ВАРИАНТ
// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredients[i];
//   itemEl.classList.add("item");

//   elements.push(itemEl);
// }

// console.log(elements);

// const listEl = document.querySelector("#ingredients");

// listEl.append(...elements);

//2ВАРИАНТ
// const listEl = document.querySelector("#ingredients");

// const elements = ingredients.map((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");

//   return itemEl;
// });

// listEl.append(...elements);

//3ВАРИАНТ

const listEl = document.querySelector("#ingredients");

const makeIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");

    return itemEl;
  });
};

const elements = makeIngredients(ingredients);
listEl.append(...elements);
