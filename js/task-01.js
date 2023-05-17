
const myCategoriEl = document.querySelector("#categories");


 console.log(`Number of categories:${myCategoriEl.children.length}`);


[...myCategoriEl.children].forEach((category) => {
   
    const categoryElements = category.lastElementChild.children;

    console.log(
     `Category: ${category.firstElementChild.textContent}
      Elements: ${categoryElements.length}`
    );
 });


