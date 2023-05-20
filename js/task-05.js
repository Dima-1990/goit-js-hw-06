

const formInputEl = document.querySelector("#name-input");
const spanNameEl = document.querySelector("#name-output");



formInputEl.addEventListener('input', (e) => {
    
    spanNameEl.textContent = e.target.value.length !== 0 ? `${e.target.value}` : "Anonymous";
})





