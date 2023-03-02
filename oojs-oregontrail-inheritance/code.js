/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Classes here.
/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Objects here.
class Traveler {
    constructor(name, food, isHealthy) {
        this.name = name; // must be provided as a parameter to the constructor
        this.food = 1; // initial value of 1
        this.isHealthy = true; // initial value is true
    }
    // Increase the traveler's food by 2
    hunt() {
        return this.food += 2;
    }
    // Consumes 1 unit of the traveler's food. 
    // If the traveler doesn't have any food to eat, the traveler is no longer healthy.
    eat() {
        if (this.food < 1) {
            return this.isHealthy = false;
        } else {
        this.food -= 1;
        }
    }
}

class Wagon {
    constructor(capacity, passengersList) {
        this.capacity = capacity; // must be provided as a parameter to the constructor
        this.passengersList = []; // initial value is empty
    }
    // Return the number of empty seats, determined by the capacity set when the wagon was created, compared to the number of passengers currently on board.
    getAvailableSeatCount() {
        let availableSeatCount = this.capacity - this.passengersList.length;
        return availableSeatCount;
    }
    // Add the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
    join(traveler) {
        if(this.getAvailableSeatCount() > 0) {
            this.passengersList.push(traveler);
        }
    }

    // Return true if there is at least one unhealthy person in the wagon. Return false if not.
    shouldQuarantine() {
        let healthyPassenger = this.passengersList.some(traveler => traveler.isHealthy === false);
        return healthyPassenger;
    }

    // Return the total amount of food among all occupants of the wagon.
    totalFood() {
        let meals = 0;
        for(let index = 0; index < this.passengersList.length; index += 1) {
            meals += this.passengersList[index].food;
        }
        return meals;
    }
}

// Create a Doctor
class Doctor extends Traveler {
    constructor (name, food, isHealthy) {
        super(name, food, isHealthy)
    }

    // If a traveler is sick, pass the sick traveler’s object as a parameter to the .heal() method, and their isHealthy property is changed to true
    heal (traveler) {
        if (traveler.isHealthy === false) {
            traveler.isHealthy = true;
        }
    }
}

// Create a Hunter that is better at finding food, but requires more food to eat.
// They start out with 2 food instead of 1 like other travelers do
// They can also give food to other travelers
class Hunter extends Traveler {
    constructor (name, food, isHealthy) {
        super(name, food, isHealthy)
        this.food = 2
    }

    // Increase the hunter's food by 5. (A normal traveler gains only 2.)
    hunt () {
        this.food = this.food + 5;
    }

    // Consumes 2 units of the hunter's food. If the hunter doesn't have 2 food when they are instructed to eat, they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy. (A normal traveler eats only 1 unit of food.)
    eat () {
        if (this.food >= 2) {
            this.food -= 2
        } else {
            this.food = 0
            this.isHealthy = false
        }
    }

    // Transfers numOfFoodUnits from the hunter to a different traveler. If the hunter has less food than they are being asked to give, then no food should be transferred.
    giveFood(traveler, numOfFoodUnits){
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }
}