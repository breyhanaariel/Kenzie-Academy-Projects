let todos = [
  "Take Jim to the hair salon",
  "Drop off wedding invitation at mailbox",
  "Pick up the cake",
  "Call the caterers",
  "Schedule the flower delivery",
  "Dry Clean the Suits"
];

function renderTodoApp() {
  // Follow the instructions on my.kenzie.academy to complete the assignment.
  // Your Code Here
let app = document.getElementById('app');
let newh3 = document.createElement("h3");
newh3.innerText = "Todo List";
app.append(newh3);
let unorderedlist = document.createElement("ul");
todos.forEach(function (todo) {
	var li = document.createElement('li');
  li.classList.add('list-item');
	li.textContent = todo;
	unorderedlist.appendChild(li);
});
app.append(unorderedlist);

}

renderTodoApp();
