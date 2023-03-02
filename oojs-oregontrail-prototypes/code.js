/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Objects here.
function Traveler (name, food, isHealthy) {
    this.name = name; // must be provided as a parameter to the constructor
    this.food = 1; // initial value of 1
    this.isHealthy = true; // initial value is true
}

function Wagon (capacity, passengersList) {
    this.capacity = capacity; // must be provided as a parameter to the constructor
    this.passengers = []; // initial value is empty
}

// Increase the traveler's food by 2
Traveler.prototype.hunt = function() {
    return this.food += 2;
}

// Consumes 1 unit of the traveler's food. 
// If the traveler doesn't have any food to eat, the traveler is no longer healthy.
Traveler.prototype.eat = function () {
    if (this.food < 1) {
        return this.isHeatlthy = false;
    } else {
        this.food -= 1;
    }
}

// Return the number of empty seats, determined by the capacity set when the wagon was created, compared to the number of passengers currently on board.
Wagon.prototype.getAvailableSeatCount = function() {
    let availableSeatCount = this.capacity - this.passengers.length;
    return availableSeatCount;
}

// Add the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
Wagon.prototype.join = function (traveler) {
    if(this.getAvailableSeatCount() > 0) {
        this.passengers.push(traveler);
    }
}

// Return true if there is at least one unhealthy person in the wagon. Return false if not.
Wagon.prototype.shouldQuarantine = function() {
    let healthyPassenger = this.passengers.some(traveler => traveler.isHeatlthy === false);
    return healthyPassenger;
}

// Return the total amount of food among all occupants of the wagon.
Wagon.prototype.totalFood = function() {
    let meals = 0;
    for(let index = 0; index < this.passengers.length; index += 1) {
        meals += this.passengers[index].food;
    }
    return meals;
}