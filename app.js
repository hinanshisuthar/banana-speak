var buttontranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURl(text){
    return serverURl + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something is wrong with the server! try again after some time");
}

function clickedEventHandler(){
    var inputText = textArea.value;
    
    fetch(getTranslationURl(inputText))
    .then(response => response.json())
    .then(json => outputDiv.innerText=json.contents.translated)
    .catch(errorHandler); 

};

buttontranslate.addEventListener("click", clickedEventHandler);

