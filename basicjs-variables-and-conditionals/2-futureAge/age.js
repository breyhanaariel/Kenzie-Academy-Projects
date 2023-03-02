// Exercise Two - Calculating your future age.
//
// You want to know how old you will be in any given year.  Create a piece of code that will computer
// your age given your birth year and a year in the future.
//
// Step One:
// prompt for the year the user was born.  Then prompt them for a year in the future.
// Store both of these in descriptively named variables.
let birthyear = prompt("What is year where you born?");
let futureyear = prompt("Enter a year in the future");
// Step Two:
// Calculate the two possible ages for that year based on their inputs.
//
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//
// Store the two possible ages in two different variables.

let futureage1 = futureyear - birthyear;
let futureage2 = (futureyear - birthyear) - 1;
// Step Three:
// Create a variable called message which describes the result.
// "I will be either NN or NN in YYYY", substituting the values.
//

let message = "I will either be " + futureage1 +  " or " + futureage2 + " in " + futureyear;
// Step Four:
// Print your message to the browser using document.write()
//
// Write your code here 👇
document.write(message);