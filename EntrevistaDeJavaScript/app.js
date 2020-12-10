const usermessage = document.getElementById('messageform');
const messageUl = document.getElementById('messageUl');
const upperCaseButton = document.getElementById('upperCaseButton');
const upperCaseButton1 = document.getElementById('upperCaseButton1');

usermessage.addEventListener("submit", event =>{
    event.preventDefault();

    //Uso form data en vez de query Selector
    let formDataElement = new FormData(event.target);
    let userInputValue = formDataElement.get("inputMessage");
    let messageLi = createMessageElement(userInputValue);
    messageUl.appendChild(messageLi);
    clearInput();

})

function createMessageElement(message){
    let messageLi = document.createElement("li");
    messageLi.className = "user-message";
    let messageTextElement = document.createTextNode(message);
    messageLi.appendChild(messageTextElement);
    return messageLi;
}

function clearInput(){
    document.getElementById("inputMessage").value = "";
}

function textToCapitalize(text){
    let wordText = text.trim().split(" ");
    wordText = wordText.map(word => upperFirstChar(word));
    return wordText.join(" ");
}

function upperFirstChar(words){
    return words.charAt(0).toUpperCase() + words.slice(1)
}

upperCaseButton.addEventListener("click", () =>{
    let allUserMessage = document.getElementsByClassName('user-message');
    //Existe una alternativa con forEach que ahora no recuerdo!
    for(let index = 0; index < allUserMessage.length; index++){
        //allUserMessage[index].classList.add("capitalize");
        allUserMessage[index].style.textTransform = "capitalize";
    }
})

//other form
upperCaseButton1.addEventListener("click", () =>{
    let allUserMessage = document.getElementsByClassName('user-message');
    //Existe una alternativa con forEach que ahora no recuerdo!
    for(let index = 0; index < allUserMessage.length; index++){
        let textMessage = allUserMessage[index].textContent;
        allUserMessage[index].textContent = textToCapitalize(textMessage);
    }
})