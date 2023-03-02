// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
document.getElementById('submitButton').addEventListener('click', function () {
    let nameInput = document.getElementById('name_input');
    let nameInputValue = nameInput.value;
    let emailInput = document.getElementById('email_input');
    let emailInputValue = emailInput.value;
    let messageInput = document.getElementById('message_input');
    let messageInputValue = messageInput.value;
    event.preventDefault();
    alert('Hey ' + nameInputValue + ' said: "' + messageInputValue + '". Message them back at ' + emailInputValue);
})