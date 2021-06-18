const inputContainer = document.querySelector(".input-container");
const btnTranslate = document.querySelector(".btn-translate");
const outputContainer = document.querySelector(".output-container");


const btnClickHandler = () => {
    outputContainer.innerText = inputContainer.value;
}

btnTranslate.addEventListener("click", btnClickHandler);