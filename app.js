const inputContainer = document.querySelector(".input-container");
const btnTranslate = document.querySelector(".btn-translate");
const outputContainer = document.querySelector(".output-container");
const url = "https://api.funtranslations.com/translate/minion.json";

const urlConstructor = text => url + "?text=" + text;

const btnClickHandler = () => {
    fetch(urlConstructor(inputContainer.value))
    .then(Response => Response.json())
    .then(json => outputContainer.innerText = json.contents.translated)
}

btnTranslate.addEventListener("click", btnClickHandler);


