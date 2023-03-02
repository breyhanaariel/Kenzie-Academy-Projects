/*
---------------------------------------------------------------------------
Objects - Part One
*/

// Do not modify this object here.
let examplePerson = {
  firstName: "Homer",
  lastName: "Simpson",
  hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
  address: {
    number: 742,
    street: "Evergreen Terrace",
    city: "Springfield",
    state: "Illinois",
    zipcode: "12345",
  },
  "favorite color": "yellow",
};

/*
Using the function below, print the person to the page according 
to the instructions on my.kenzie
*/

function renderPerson(person) {
  // Your Code Here
    // create a container with the class card to it
  let div = document.createElement('div');
  div.classList.add('card');
  document.body.append(div);
    // inside an <h2> render the first and last name sepearated by a space character
  let nameTitle = document.createElement('h2');
  nameTitle.innerHTML = `${person.firstName}` + " " + `${person.lastName}`;
  div.append(nameTitle);
    // inside an <h4> render the Hobbies title
  let hobbiesTitle = document.createElement('h4');
  hobbiesTitle.innerHTML= 'Hobbies';
  div.append(hobbiesTitle);
    // create a <ul> which will hold all of the hobbies and use a loop to render every hobby as a <li>
  let ul = document.createElement('ul');
  var entries = Object.values(person.hobbies);
  entries.forEach(function (entry) {
    var li = document.createElement('li');
    li.textContent = entry;
    ul.appendChild(li);
  });
  div.append(ul);
    // inside an <h4> render the Shipping Address title
  let shippingaddressTitle = document.createElement('h4');
  shippingaddressTitle.innerHTML = 'Shipping Address';
  div.append(shippingaddressTitle);
    // inside a <p> render the Shipping Address
  let shippingaddress = document.createElement('p');
  shippingaddress.innerHTML= `${person.firstName}` + " " + `${person.lastName}` + "<br />" + `${person.address["number"]}` + " " + `${person.address["street"]}` + "<br />" + `${person.address["city"]}` + ", " + `${person.address["state"]}` + " " + `${person.address["zipcode"]}`;
  div.append(shippingaddress);
    // inside a <h4> render the Favorite Color title
  let favoritecolorTitle = document.createElement('h4');
  favoritecolorTitle.innerHTML = 'Favorite Color';
  div.append(favoritecolorTitle);
    // inside a <p> render the Favorite Color
  let favoritecolor = document.createElement('p');
  favoritecolor.innerText = `${person["favorite color"]}`;
  div.append(favoritecolor);
}

renderPerson(examplePerson);

/*
---------------------------------------------------------------------------
Part Two

Create a new person.  

Your object should look very similar to the Person object above!
But you should use different values.  Put whatever you want for the values.

Call renderPerson() and pass your new person object in as an argument to 
render your person to the page.
*/

// Your Code Here
let examplePerson2 = {
  firstName: "Usagi",
  lastName: "Tsukino",
  hobbies: ["Eating", "Video Games", "Daydreaming"],
  address: {
    number: 237,
    street: "Senshi Galaxy",
    city: "Hollywood",
    state: "California",
    zipcode: "90027",
  },
  "favorite color": "white",
};

renderPerson(examplePerson2);


/*
---------------------------------------------------------------------------
Part Three

Modify the person object to change them to bart.  
Follow the instruction on my.kenzie
*/

function changePersonToBart(person) {
  // change first name to Bart
  person['firstName'] = 'Bart';
  // add Skateboarding to the hobby
  person.hobbies["3"] = 'Skateboarding';
  // remove the hobby Playing with his kids
  delete person.hobbies["2"];
  // change favorite color to orange
  person['favorite color'] = 'orange';
}

  // call the function and pass in example Person
changePersonToBart(examplePerson);
  // assign the return value to a new variable
let Bart = examplePerson;
  // call renderPerson() with the new variable
renderPerson(Bart);

/*
---------------------------------------------------------------------------
Part Four (Optional Practice)

Create your own object!
*/

// Your Code Here




