// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;

// function for determining if page is ending page
function isEndingPage(currentPage) {
    for (let index = 0; index < endingPages.length; index++) {
      if (currentPage === endingPages[index]) {
      return true;
      }
    }
    return false;
  }

// start page
alert(pages[currentPage]);
document.write(pages[currentPage]);
document.write("<br> <br>");


// choose your own adventure loop
while (currentPage !== null) {
// if the page is not an ending, then use prompt() to display a page to the user, they will then enter one of the page numbers and press ok
    if (isEndingPage(currentPage) === false) {
        currentPage = prompt(pages[currentPage] + "\n \n What page would you like to go to?");
        if (currentPage !== null) {
            currentPage = parseInt(currentPage);
            document.write("<p>You turned to page " + currentPage + "</p><br>");
            document.write("<p>" + pages[currentPage] + "</p><br>");
        }
// if the person presses "Cancel" on the immediate, then currentPage is "null", and the loop ends
        if (currentPage == null) {
            document.write("<h1>CANCELLED GAME OVER - THE END</h1>");
        }
// if the page is an ending then exit the game
    } else {
        document.write("<h1>GAME OVER - THE END</h1>");
        currentPage = null;
    }
}