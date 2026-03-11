let gameActive = true; //this variable is required. 

let bach = 0;
let money = 2;
let car = Math.floor(Math.random() * 101);

/*
function locationA() {
    clear();
    print("\nYou are in location A!");
    print("\nWhere do you want to go next?" +
        "\n\tlocationB");

    function processInput(input){
        if (input.toLowerCase() === "locationb") {
            locationB();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}
*/
function home() {
    clear();
if (bach == 1){
	print("You have come Bach to your love!")
}
else{
    print("\nYou are in your home. No one else is home so it's quite empty.");
    print("\nWhere do you want to go next?" +
        "\n\tOutside");
}
    function processInput(input){
        if (input.toLowerCase() === "outside") {
            outside();
        } else if (input.toLowerCase() === "bach") {
		bachm();
	} else {
            stayHere();
            waitThenCall(home);
        }
    }
    waitForInput(processInput);
}

function bachm() {
    clear();
    print("\nWelcome Bach my friend!" +
	"\nChickens go Bach Bach Bach." +
	"\nI just had a flashbach!" +
	"\nI must go Bach to the future!" +
	"\nI want to eat some Bachliva and listen to the Bachstreet Boys.");
    print("\n\tHome");

    function processInput(input){
        if (input.toLowerCase() === "home") {
            home();
        } else {
            stayHere();
            waitThenCall(bachm);
        }
    }
    waitForInput(processInput);
}

function outside() {
    bach = 1;
    clear();
    print("\nYou are outside your home. There is the street nearby ");
    print("\nWhere do you want to go next?" +
        "\n\tHome" +
	"\n\tStreet"); 
    function processInput(input){
        if (input.toLowerCase() === "home") {
            home();
	} else if (input.toLowerCase() === "street") { 
		street();
	} else {
            stayHere();
            waitThenCall(outside);
        }
    }
    waitForInput(processInput);
}

function street() {
    clear();
    print("\nYou are in the street!");
if (car == 17){
	print("You got hit by a car and died. :(");
} else {
    print("You can go to your neighbor's house or the twon square from here.");
    print("\nWhere do you want to go next?" +
        "\n\tNeighbor's House" +
	"\n\tTown Square" +
	"\n\tOutside"); }

    function processInput(input){
        if (input.toLowerCase() === "neighbor's house") {
            neigh();
        } else if (input.toLowerCase() === "town square") {
		town();
	} else if (input.toLowerCase() === "outside") {
		outside();
	} else {
            stayHere();
            waitThenCall(street);
        }
    }
    waitForInput(processInput);
}


function neigh() {
    clear();
    print("\nWhy are you going to your neighbor's house? You weirdo!");
    print("\nWhere do you want to go next?" +
        "\n\tStreet");

    function processInput(input){
        if (input.toLowerCase() === "street") {
            street();
        } else {
            stayHere();
            waitThenCall(neigh);
        }
    }
    waitForInput(processInput);
}

function town() {
    clear();
    print("\nYou are in the town square. A lone fountain sits in the middle.");
    print("\nWhere do you want to go next?" +
        "\n\tFountain" +
	"\n\tStreet");

    function processInput(input){
        if (input.toLowerCase() === "fountain") {
            font();
        } else if (input.toLowerCase() === "street") {
		street();
	} else {
            stayHere();
            waitThenCall(town);
        }
    }
    waitForInput(processInput);
}

function font() {
    clear();
    print("\nYou stand in front of the fountain. You can throw a coin in.");
    print("\nWhere do you want to go next?" +
        "\n\tTown Square" +
	"\n\tToss Coin");

    function processInput(input){
        if (input.toLowerCase() === "town square") {
            town();
        } else if (input.toLowerCase() === "toss coin") {
		coin();
	} else {
            stayHere();
            waitThenCall(font);
        }
    }
    waitForInput(processInput);
}

function coin() {
    clear();
if (money = 2) {
    print("\nYou toss a coin into the fountain. The fountain whispers 'Go Bach to your home to find your love.'");
	money -= 1;
    print("\nWhere do you want to go next?" +
        "\n\tTown Square");
} else if (money = 1) {
    print("\nYou toss a coin into the fountain. The fountain whispers 'Go Bach to your home to find your love.'");
	money -= 1;
    print("\nWhere do you want to go next?" +
        "\n\tTown Square");
} else {
	print("You broke. :(" +
	"\n\tTown Square")
}
    function processInput(input){
        if (input.toLowerCase() === "town square") {
            town();
        } else {
            stayHere();
            waitThenCall(coin);
        }
    }
    waitForInput(processInput);
}

function start(){
    print("Today is Valentines Day and a single pink envolope sits on the table. Inside the evolope is a card that reads 'Come Bach My Love!' It is time to come Bach. Press any key to start:");
    bach = 0;
    function processInput(input){
            home();
    }
    waitForInput(processInput);
}
