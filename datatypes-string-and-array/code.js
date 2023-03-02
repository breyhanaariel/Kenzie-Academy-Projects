let gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
let lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];
let bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

// ----------------------------------------------------------------------
// Complete the Following Katas
// ----------------------------------------------------------------------

// Remember to also append the results to your HTML page for every kata!
// Use document.createElement() to create the HTML with JavaScript
// This should be in the format:
// <h3>Kata 0</h3>
// <div>["Your", "array", "result", "here"]</div>

// Remember to render your arrays with JSON.stringify();

// Hint: You could create a function which renders any result to the DOM,
// then just call this function inside each kata!  That way you only have to write code to render
// to the DOM once :)
function kataHelper(kata) {
  let kataTitle = document.createElement("h3");
  kataTitle.textContent = kata;
  document.body.append(kataTitle);
}


// Write a function that returns an array with the cities in 'gotCitiesCSV'.

function kata1() {
  // Your Code Here
  kataHelper("Kata 1")
  let div = document.createElement('div');
  let ArraygotCitiesCSV = gotCitiesCSV.split(" ");
  div.textContent = JSON.stringify(ArraygotCitiesCSV);
  document.body.append(div);
  // Render to the DOM.
  return ArraygotCitiesCSV; // Return your result.
}

kata1(); // Remember to execute your function!

// Write a function that returns an array of words from the sentence in 'bestThing'.
function kata2() {
  // Your Code Here
  kataHelper("Kata 2")
  let div = document.createElement('div');
  var bestThingarray = bestThing.split(" ");
  div.textContent = JSON.stringify(bestThingarray);
  document.body.append(div);
  return bestThingarray;
}

kata2();

// Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'.
function kata3() {
  // Your Code Here
  kataHelper("Kata 3")
  let div = document.createElement('div');
  var gotCitiesCSVstring = gotCitiesCSV.replace(/,/g, ';');
  div.textContent = gotCitiesCSVstring;
  document.body.append(div);
  return gotCitiesCSVstring;
}

kata3();

// Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'.
function kata4() {
  // Your Code Here
  kataHelper("Kata 4")
  let div = document.createElement('div');
  div.textContent = lotrCitiesArray.join(',');
  document.body.append(div);
  return lotrCitiesArray;
}

kata4();

// Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'.
function kata5() {
  // Your Code Here
  kataHelper("Kata 5")
  let div = document.createElement('div');
  var fivelotrCitiesArray = lotrCitiesArray.slice(0, 5);
  div.textContent = JSON.stringify(fivelotrCitiesArray);
  document.body.append(div);
  return fivelotrCitiesArray;
}

kata5();

// Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'.
function kata6() {
  // Your Code Here
  kataHelper("Kata 6")
  let div = document.createElement('div');
  var lastfivelotrCitiesArray = lotrCitiesArray.slice(1).slice(-5);
  div.textContent = JSON.stringify(lastfivelotrCitiesArray);
  document.body.append(div);
  return lastfivelotrCitiesArray;
}

kata6();

// Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'.
function kata7() {
  // Your Code Here
  kataHelper("Kata 7")
  let div = document.createElement('div');
  var threetofivelotrCitiesArray = lotrCitiesArray.slice(2, 7);
  div.textContent = JSON.stringify(threetofivelotrCitiesArray);
  document.body.append(div);
  return threetofivelotrCitiesArray;
}

kata7();

// Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata8() {
  // Your Code Here
  kataHelper("Kata 8")
  let div = document.createElement('div');
  lotrCitiesArray.splice(2, 1);
  div.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(div);
  return lotrCitiesArray;
}

kata8();

// Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata9() {
  // Your Code Here
  kataHelper("Kata 9")
  let div = document.createElement('div');
  lotrCitiesArray.splice(4, 6);
  div.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(div);
  return lotrCitiesArray;
}

kata9()

// Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the modified 'lotrCitiesArray'.
function kata10() {
  // Your Code Here
  kataHelper("Kata 10")
  let div = document.createElement('div');
  lotrCitiesArray.splice(2, 0, 'Rohan');
  div.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(div);
  return lotrCitiesArray;
}

kata10();

// Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata11() {
  // Your Code Here
  kataHelper("Kata 11")
  let div = document.createElement('div');
  lotrCitiesArray.splice(5, 0, 'Deadest Marsh');
  div.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(div);
  return lotrCitiesArray;
}

kata11()

// Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'.
function kata12() {
  // Your Code Here
  kataHelper("Kata 12")
  let div = document.createElement('div');
  var fivebestThing = bestThing.slice(0, 14);
  div.textContent = fivebestThing;
  document.body.append(div);
  return fivebestThing;
}

kata12();

// Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'.
function kata13() {
  // Your Code Here
  kataHelper("Kata 13")
  let div = document.createElement('div');
  var lastfivebestThing= bestThing.slice(1).slice(-12);
  div.textContent = lastfivebestThing;
  document.body.append(div);
  return lastfivebestThing;
}

kata13();

// Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even').
function kata14() {
  // Your Code Here
  kataHelper("Kata 14")
  let div = document.createElement('div');
  var positionbestThing = bestThing.slice(23, 38);
  div.textContent = positionbestThing;
  document.body.append(div);
  return positionbestThing;
}

kata14();

// Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'.
function kata15() {
  // Your Code Here
  kataHelper("Kata 15")
  let div = document.createElement('div');
  var lastfiveagainbestThing= bestThing.substring(bestThing.length - 12);
  div.textContent = lastfiveagainbestThing;
  document.body.append(div);
  return lastfiveagainbestThing;
}

kata15();

// Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'.
function kata16() {
  // Your Code Here
  kataHelper("Kata 16")
  let div = document.createElement('div');
  var positionagainbestThing = bestThing.substring(23, 38);
  div.textContent = positionagainbestThing;
  document.body.append(div);
  return positionagainbestThing;
}

kata16();

// Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the modified array.
function kata17() {
  // Your Code Here
  kataHelper("Kata 17")
  let div = document.createElement('div');
  lotrCitiesArray.pop();
  div.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(div);
  return lotrCitiesArray;
}

kata17();

// Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #17 to the back of the array and returns the modified array.
function kata18() {
  // Your Code Here
  kataHelper("Kata 18")
  let div = document.createElement('div');
  lotrCitiesArray.push('Deadest Marsh');
  div.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(div);
  return lotrCitiesArray;
}

kata18();

// Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the modified array.
function kata19() {
  // Your Code Here
  kataHelper("Kata 19")
  let div = document.createElement('div');
  lotrCitiesArray.shift();
  div.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(div);
  return lotrCitiesArray;
}

kata19();

// Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #19 to the front of the array and returns the modified array.
function kata20() {
  // Your Code Here
  kataHelper("Kata 20")
  let div = document.createElement('div');
  lotrCitiesArray.unshift('Mordor');
  div.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(div);
  return lotrCitiesArray;
}

kata20();

// ----------------------------------------------------------------------
// Optional Practice Problems - Complete these for extra practice
// ----------------------------------------------------------------------

// Remember to append the results of each kata to the page as well as return the result!

// Write a function that finds and returns the index of 'only' in 'bestThing'.
function kata21() {
  // Your Code Here
}
// Write a function that finds and returns the index of the last word in 'bestThing'.
function kata22() {
  // Your Code Here
}
// Write a function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.).
function kata23() {
  // Your Code Here
}
// Write a function that finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'.
function kata24() {
  // Your Code Here
}
// Write a function that finds and returns an array with all the words in 'bestThing' that start with a 'b'.
function kata25() {
  // Your Code Here
}
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'.
function kata26() {
  // Your Code Here
}
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'.
function kata27() {
  // Your Code Here
}
// Write a function that returns the index of 'Mirkwood' in 'lotrCitiesArray'.
function kata28() {
  // Your Code Here
}
// Write a function that finds and returns the first city in 'lotrCitiesArray' that has more than one word.
function kata29() {
  // Your Code Here
}
// Write a function that reverses the order of 'lotrCitiesArray' and returns the modified array.
function kata30() {
  // Your Code Here
}
// Write a function that sorts 'lotrCitiesArray' alphabetically and returns the modified array.
function kata31() {
  // Your Code Here
}
// Write a function that sorts 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the modified array.
function kata32() {
  // Your Code Here
}
