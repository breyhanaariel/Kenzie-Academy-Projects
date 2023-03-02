// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

let numbers = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472,
];

document.write("<h1>Array Analyzer</h1>")
document.write("<h3>Now analyzing the array: " + numbers + "</h3>");
document.write("<ul>");
// Write your code here 👇

let largestNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
  let currentNumber = numbers[index];
  if (currentNumber > largestNumber) {
    largestNumber = currentNumber;
  }
}

let smallestNumber = Number.POSITIVE_INFINITY;
for (let index = 0; index < numbers.length; index++) {
  let number = numbers[index];
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

let sumNumber = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sumNumber += numbers[index];
}

var sum = 0;
for(var index = 0; index < numbers.length; index++){
    sum += numbers[index];
}
let averageNumber = sum / numbers.length;

let evenNumber = [];
let oddNumber = [];
for (var index = 0; index < numbers.length; index++) {
  if ((numbers[index] % 2) != 1) {
      evenNumber.push(numbers[index]);
      } else {
      oddNumber.push(numbers[index]);
  }
}

let eightdivisibleNumber = [];
for(var index = 0; index < numbers.length; index++) {
  if ((numbers[index] % 8) == 0) {
    eightdivisibleNumber.push(numbers[index]);
  }
}

// Then render each li:
document.write("<li>Largest Number: " + largestNumber + "</li>");
document.write("<li>Smallest Number: " + smallestNumber + "</li>");
document.write("<li>Sum Number: " + sumNumber + "</li>");
document.write("<li>Average Number: " + averageNumber + "</li>");
document.write("<li>Even Numbers: " + evenNumber + "</li>");
document.write("<li>Odd Numbers: " + oddNumber + "</li>");
document.write("<li>Divisible By 8 Numbers: " + eightdivisibleNumber + "</li>");

// etc...


document.write("</ul>");
