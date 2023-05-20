


const myFormEls = document.querySelector(".login-form");


myFormEls.addEventListener("submit", onSubmit);



function onSubmit(e) {
    e.preventDefault()

    const { email, password } = e.currentTarget.elements
    
if (email.value === '' || password.value === '') {
    alert("Не всі поля заповнені"); 
}
else {
      const formData = {
        email: email.value,
        password: password.value,
      };

      console.log(formData);
      myFormEls.reset();
    }
}



