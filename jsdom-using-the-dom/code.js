/* _______________________________________________________________
Part 1.) It's the UX bunch! 

To reveal who is behind box 2, we'll need  to use some 
DOM methods and change the opacity back to 1. 

We've assigned ID of "box-two" to the image.  

Use getElementById to select the element, then assign that element to a new variable.
Then change the opacity style to make the image visible. 

Hint: https://www.w3schools.com/cssref/css3_pr_opacity.asp
________________________________________________________________*/
// Your code here
let boxTwo = document.getElementById('box-two');
boxTwo.style.opacity = '1';

/* _______________________________________________________________
Part 2.) Reveal Box 9

Box 9 is hidden because its display style is set to "none".

However, box 9 does not have an id!  Look at the HTML of box nine, 
find a way to access that element using JavaScript.
Then change the display style to "block" to make the image visible.

Try to make this javaScript as short as possible!

Hint: One way you can access that element is by "walking the DOM".  Re-read that 
section of the reading if you're not sure where to start. 

Hint: https://www.w3schools.com/jsref/prop_style_display.asp
________________________________________________________________*/
// Your code here
document.getElementsByClassName('image-grid__img')[7].style.display = 'block';

/*________________________________________________________________
Part 3.) Changing the color of the top message

Use JavaScript to change the color of the "Who is behind box 2 and 9??" text.

Open the inspector in Chrome and find the element which contains that text.

Notice what CSS class that element has.

Use querySelector to find the element by searching with its CSS Class.
Assign that to a new variable.

Then change color style to be "red"

Hint: https://www.w3schools.com/jsref/prop_style_color.asp
________________________________________________________________*/
// Your code here
let topMessage = document.querySelector('.title__heading');
topMessage.style.color = 'red';

/*________________________________________________________________
Part 4.) Fix the page title

The page title (the text that shows up in the tab of your browser) is wrong!

Let's update it to say "The Kenzie Bunch"

Use JavaScript to update it.

Hint: https://www.w3schools.com/jsref/prop_doc_title.asp
________________________________________________________________*/
// Your code here
document.title = 'The Kenzie Bunch';

/*________________________________________________________________
Part 5.) The Hidden Message

Lastly, we've added an empty paragrah element inside of the header.  
Go locate it in the HTML.
Use JavaScript to inject the paragragh's inner HTML with a string containing 
whatever text you want.  Then add the class "hidden-message" to it.

Hint: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
Hint: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
________________________________________________________________*/
// Your code here
document.querySelector('p').innerHTML = 'Brianna Dickenson';
document.querySelector('p').classList.add('hidden-message');