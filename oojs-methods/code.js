let coinflip = document.querySelector('#coinflip');

const coin = {
  state: 0,
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
    if (Math.random () > .5) {
      this.state = 0 
      } else {
      this.state = 1
      }
      return this.state;
  },
  toString: function() {
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
      if (this.state === 0) {
      return 'Heads';    
      } else {
      return 'Tails';    
      }
  },
  toHTML: function () {
    const image = document.createElement('img');
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    if (this.state === 0) {
      image.src = 'images/heads.png';
       } else {
      image.src = 'images/tails.png';
    }
    image.style.height = '50px';
    image.style.width = '50px';
    return image;
  },
};


function display20Flips() {
  const divFlips = document.createElement('div');
  let display20FlipsTitle = document.createElement('h3');
  display20FlipsTitle.textContent = 'Display 20 Flips';
  divFlips.append(display20FlipsTitle);
  var results = [];
  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  for (let i = 0; i < 20; i ++) {  
    coin.flip();
    const paragraph = document.createElement('p');
    paragraph.textContent = coin.toString();
    divFlips.append(paragraph);
    results.push(coin.toString());
  }
  let displayResults = JSON.stringify(results);
  const paragraphArray = document.createElement('p');
  paragraphArray.textContent = 'Array:' + displayResults;
  divFlips.append(paragraphArray);
  document.body.append(divFlips);
}

function display20Images() {
  const divImages = document.createElement('div');
  let display20ImagesTitle = document.createElement('h3');
  display20ImagesTitle.textContent = 'Display 20 Flips With Images';
  divImages.append(display20ImagesTitle);
  const results = [];
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
  for (let i = 0; i < 20; i ++) {  
    coin.flip();
    const paragraph = document.createElement('p');
    paragraph.append(coin.toHTML());
    divImages.append(paragraph);
    results.push(coin.toString());
    }
  let displayResults = JSON.stringify(results);
  const paragraphImageArray = document.createElement('p');
  divImages.append(paragraphImageArray);
  paragraphImageArray.textContent = 'Array:' + displayResults;
  document.body.append(divImages);
}

display20Flips();
display20Images();
