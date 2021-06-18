const inputContainer = document.querySelector(".input-container");
const btnTranslate = document.querySelector(".btn-translate");

const btnClickHandler = () =>{
    console.log(inputContainer.value);
}

btnTranslate.addEventListener("click", btnClickHandler);