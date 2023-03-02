// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let s = " Snap";
let c = " Crackle"; 
let x = " Snapcrackle";
function snapCrackle(maxValue) {
    const snapArray = []
    for (let value = 1; value <= maxValue; value++) {
    // if a number is both odd and a multiple of 5 concatenate SnapCrackle to the end of the string
        if (value % 2 !== 0 && value % 5 === 0) {
        snapArray.push(x);
    // if a number is odd, concatenate snap to the end of the string
        } else if (value % 2 !== 0) {
        snapArray.push(s);
        // if a number is a multiple of 5 concatenate crackle to the end of the string
        } else if (value % 5 === 0) {
        snapArray.push(c);
    // if a number is neither odd or a multiple of 5 concatenate the number and , to the end of the string
        } else {
        snapArray.push(value);
        }
    }
    return snapArray;
  }

function render(text, maxValue) {
    document.write(`
   <h1>Snap Crackle!</h1>
   <h3>Max Value ${maxValue}</h3>
   <p>${text}</p>
   `);
}

let highestNumber = prompt("What is the highest number?");
snapCrackle(highestNumber);
let result = snapCrackle(highestNumber);
console.log(render(result, highestNumber));