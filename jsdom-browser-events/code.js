// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
var boxTop = 200;
var boxLeft = 200;

document.getElementById('image').style.top = boxTop + 'px';
document.getElementById('image').style.left = boxLeft + 'px';

// ArrowDown adds 10 to the boxTop variable
// ArrowUp subtract 10 from the boxTop variable
// left and right cursor keys modify the left style
function onKeyPress (event) {
    console.log('You Pressed: ' + event.code);
    var key_code = event.which||event.keyCode;
    switch(key_code) {
        case 37: // LeftArrow
            document.getElementById('image').style.left=parseInt(document.getElementById('image').style.left)-5 +'px';
            break;
        case 38: // ArrowUp
            document.getElementById('image').style.top=parseInt(document.getElementById('image').style.top)-10 +'px';
            break;
        case 39: // RightArrow
            document.getElementById('image').style.left=parseInt(document.getElementById('image').style.left)+5 +'px';
            break;
        case 40: // ArrowDown
            document.getElementById('image').style.top=parseInt(document.getElementById('image').style.top)+10 +'px';
            break;						
    }
}

document.addEventListener('keydown', onKeyPress);

// add an event listener for the click event to the button
// create a new function as the event handler
// reset boxTop and boxLeft back to 200
// update the top and left of your box
document.getElementById('resetButton').addEventListener('click', function () {
    var boxTop = 200;
    var boxLeft = 200;
    document.getElementById('image').style.top = boxTop  + 'px';
    document.getElementById('image').style.left = boxLeft + 'px';
})