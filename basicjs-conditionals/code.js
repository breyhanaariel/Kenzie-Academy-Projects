// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

/***********************/
/* Using Conditionals  */
/***********************/

//Complete the Following Exercises.

// ----------------------------------------------------------------------------------------------
console.log("Exercise One"); // Do not modify the lines like this before each exercise, these are to make the console output more readable :)
// Is it larger than 10?
// - Create an if statement where the number is greater than 10.
// - If it is, then log "It is bigger than 10!" using console.log().
// - Change the number variable to something larger than 10, run your code and make sure it works.
// - Your code should output the message to the console.
//
// Write your code here 👇
let number = 11;
if (number > 10) {
    console.log("It is bigger than 10!");
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Two");
// Determining a color
// 1 - Pick either "blue", "red", or "green" and assign it to the color variable.
// 2 - Create an if statement, if the color is "blue", then log "The sky is blue." using console.log
// 3 - Create an else if statement, and if the color is "red" then log "The flower is red."
// 4 - Create another else if statement where if the color is "green" then log "The Leaf is green."
// 5 - Finally, create an else statement and log "It is a different color".
// 6 - Then test your code! Change the value of the color variable to different colors and run your code.
//     The correct message should log to the console.
//
// Write your code here 👇
let color = "green";
if (color === "blue") {
    console.log("The sky is blue.");
  } else if (color === "red") {
    console.log("The flower is red.");
  } else if (color === "green") {
    console.log("The leaf is green.");
  } else {
    console.log("It is a different color.");
}
  

// ----------------------------------------------------------------------------------------------
console.log("Exercise Three");
// - Create an if statement that determines if variable 'value' has an even or odd number.
//   Hint: The Numbers Reading explains how to do this.  Go back and read it, look for the 
//   "Remainder" operator.
// - If value is even, then print "The number is even"
//   otherwise print "The number is odd"
// - Change the number assigned to value to different odd and even numbers to make sure your 
//   code works.
//
// Write your code here 👇
let value = 6;
if (value % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Four");
// Determining a color
// 1 - Create your own variable to store a number. (Hint: It cannot be named number, because that was used above)
// 2 - Then create conditional statements to create the following results with that number.
//     If the number is greater than 10, and the number is less than 20, then print "Between 10 and 20!"
//     If the number is greater than or equal to 20, then print "20 or greater!"
//     If the number is exactly 16, then print "16!"
//     If the number is less than or equal to 10, print "10 or less!";
// 3 - Try changing your variable to other numbers!  For example: 3, 13, 16, 20
//     Make sure that each of the four cases output the correct message to the console.
// Hint:
//     You may need to rearrange your conditions to make this easy!
//     A good practice is to take the most restrictive condition and check it first (like 16),
//     then work your way to the most broad condition ("Some other number").
// Hint Two:
//     You can either do this with nested if statements, or you can do it with
//     a chain of if else statements, some of those just might need multible conditions
//     (like: if (a && b) )
//
// Write your code here 👇
BrinyNumber = 16;
if (BrinyNumber > 10 && BrinyNumber < 20) {
    if (BrinyNumber === 16) { 
     console.log("16!");
   } else {
     console.log("Between 10 and 20!");
   }
} else if (BrinyNumber >= 20)  {
    console.log("20 or greater!");
} else if (BrinyNumber <= 10) {
    console.log("10 or less!");
}

// When you are done with all of the exercises, check your console output to make sure it
// matches the expected output of each exercise and remove any extranneous console.log()
// statements from your code.
