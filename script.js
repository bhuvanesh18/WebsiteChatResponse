// function to handle submit event
function clickHandler() {
  //user input value
  var userText = document.getElementById("message").value;

  // trim user input value
  userText = userText.trim();

  // check if there is any input message
  if (userText.length > 0) {
    //creating new div element
    var spanElement = document.createElement("span"); //span
    var text = document.createTextNode(userText); //text node
    spanElement.appendChild(text); // append text to span
    spanClasses = "bg-primary py-1 px-3 rounded-left text-break"; //span classes
    spanElement.className = spanClasses;
    spanElement.style.maxWidth = "250px"; // set Max width for the chat message

    var divElement = document.createElement("div"); // div
    divElement.appendChild(spanElement); // append span to div
    divClasses = "d-flex justify-content-end mt-1"; //div classes
    divElement.className = divClasses;

    const messages = document.getElementById("chat-messages"); //getting chatbox id

    messages.appendChild(divElement); //append the new chat to the chatbox

    //clearing the previous input value in the input field
    document.getElementById("message").value = "";

    // Reply from the server ( response )

    //creating new div element
    var spanElement = document.createElement("span"); //span
    var text = document.createTextNode("Thanks for texting!"); //text node
    spanElement.appendChild(text); // append text to span
    spanClasses = "bg-success py-1 px-3 rounded-right text-break"; //span classes
    spanElement.className = spanClasses;
    spanElement.style.maxWidth = "250px"; // set Max width for the chat message

    var divElement = document.createElement("div"); // div
    divElement.appendChild(spanElement); // append span to div
    divClasses = "d-flex justify-content-start mt-1"; //div classes
    divElement.className = divClasses;

    messages.appendChild(divElement); //append the response message to the chatbox

    // check if we scroll or not
    shouldScroll =
      messages.scrollTop + messages.clientHeight === messages.scrollHeight;
    if (!shouldScroll) {
      scrollToBottom();
    }
    //scroll to bottom function
    function scrollToBottom() {
      messages.scrollTop = messages.scrollHeight;
    }
  } else {
    document.getElementById("error-message").style.display = "block";
    setTimeout(() => {
      document.getElementById("error-message").style.display = "none";
    }, 3000);
  }
}



// toggle show and hide chat box
function show_hide() {
  chatBox = document.getElementById("chat-box");
  if (chatBox.style.display === "block") {
    chatBox.style.display = "none";
  } else {
    chatBox.style.display = "block";
  }
}



// input field change handler
function changeHandler() {
  var inputElement = document.getElementById("message");
  var userText = inputElement.value;
  userText = userText.trim();
  if (userText.length > 0) {
    inputElement.style.outlineColor = "blue";
  } else {
    inputElement.style.outlineColor = "red";
  }
}
