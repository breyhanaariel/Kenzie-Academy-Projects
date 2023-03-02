// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"


let weather = prompt("Name a kind of weather");
let place = prompt("Name a place");
let girlname = prompt("Name a girl name");
let mood = prompt("Name a bad mood");
let boyname = prompt("Name a boy name");
let food = prompt("Name a food");
document.write("Here is a story for you!<br>");
document.write(
  "it was a rather " +
    weather +
    " day at the " +
    place +
    ", until " +
    girlname +
    " entered. She was " +
    mood +
    " and it was written all over her face. Thankfully " +
    boyname +
    " was present and had a " +
    food + 
    " which " +
    girlname +
    " ate greedily and was no longer " +
    mood + 
    " and everyone present was relieved."
);
