let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!
    // define variables
var diceRollButton = document.getElementById('roll');
var dice1000RollButton = document.getElementById('1000roll');
var diceResultDIV = document.getElementById('result');
var diceGraph = document.getElementById('graph');

    // simulate rolling a die by generatimg a random number between 1 -6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

    // simulate rolling a pair of dice by generating a random number between 1 -6 TWICE then add both numbers
function roll2Die(){
    roll1 = rollDie();
    roll2 = rollDie();
    return roll1 + roll2;
}

   // display the dice roll results and update the results by incrementing index every time a number is rolled
function dieRoll() {
    let diceRoll = roll2Die();
    diceResultDIV.innerHTML = 'You rolled a ' + diceRoll;
    let diceResult = parseInt(diceRoll);
    results[diceResult] += 1;
        // my own addition to make sure the divs are accurate
    diceGraph.innerHTML =  '<p id="helper">Frequency:' + results + ' </p>';
    document.getElementById('helper').style.display = 'none';
    renderGraph();
}

  // count the dice roll results between 2-12 in their own divs and show the matching results array index
function renderGraph() {
        // variable to find the matching array index
    let count = 2;
        // loop for the 2-12 results frequency
    for (var index = 2; index <= 12; index++){
        var newGraph = document.createElement('div');
        newGraph.id = 'diceresult'+index;
        newGraph.className = 'diceyresults';
        newGraph.innerHTML = 'You rolled a: ' + index + '<br />' + results[count++] + ' times';
        diceGraph.appendChild(newGraph);
    }
}

diceRollButton.addEventListener('click', function () {
    dieRoll();
})

dice1000RollButton.addEventListener('click', function () {
    for (var index = 0; index < 999; ++index) {
        dieRoll();
    }
})


  
