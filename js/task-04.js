

const myBtnsDiv = document.querySelector("#counter");

const toDownBtnEl = myBtnsDiv.firstElementChild;
const toAppBtnEl = myBtnsDiv.lastElementChild;

const counterValue = toDownBtnEl.nextElementSibling;




toAppBtnEl.addEventListener("click", () => {

let toNumberCounterValue = Number(counterValue.textContent);
   counterValue.textContent = toNumberCounterValue + 1;
 });



toDownBtnEl.addEventListener('click', () => {

let toNumberCounterValue = Number(counterValue.textContent);
 counterValue.textContent = toNumberCounterValue - 1;
});





