
const formInputEl = document.querySelector("#validation-input");





formInputEl.addEventListener('blur', (e) => {
    let normalLength = formInputEl.dataset.length;
    let checkedFormLength = formInputEl.value.length;

    
     formInputEl.classList.remove("invalid", "valid");

    if (checkedFormLength == normalLength) {
        formInputEl.classList.add("valid");
    }

    else {
        formInputEl.classList.add("invalid");
   }

})





 console.dir(formInputEl.dataset.length);