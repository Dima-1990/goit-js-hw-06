



const inputControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");



inputControlEl.addEventListener('input', () => {
    const fontSize = inputControlEl.value + 'px';
    textEl.style.fontSize = fontSize;
});

