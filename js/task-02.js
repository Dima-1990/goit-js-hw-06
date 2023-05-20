const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const myUlEl = document.querySelector("#ingredients");


// чи коректно створювати таке сховище?
const temporaryStorage = document.createElement('ul');

ingredients.forEach((elem) => {
  let one = document.createElement("li");

  one.textContent = elem;
  one.classList.add('item');

  temporaryStorage.append(one);
})

myUlEl.append(...temporaryStorage.childNodes);






// Альтернатива.

// const result = ingredients.map(
//     (elem) => `<li>${elem}</li>`).join("");
  
//  myUlEl.insertAdjacentHTML("afterbegin", result);