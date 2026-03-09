let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here

let bach = 0;
let money = 2;
let car = 0;
//If you need, add any "helper" functions here


//Make one function for each location
/*
function locationA() {
    clear();
    print("\nYou are in location A!");
    print("\nWhere do you want to go next? Say one of these choices:" +
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
        } else {
            stayHere();
            waitThenCall(home);
        }
    }
    waitForInput(processInput);
}

function outside() {
    bach = 1;
    clear();
    print("\nYou are outside your home. There is the street nearby ");
    print("\nWhere do you want to go next?" +
        "\n\tHome"); 
    function processInput(input){
        if (input.toLowerCase() === "home") {
            home();
        } else {
            stayHere();
            waitThenCall(outside);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
function start(){
    print("Today is Valentines Day and a single pink envolope sits on the table. Inside the evolope is a card that reads 'Come Bach My Love!' It is time to come Bach. Press any key to start:");
    bach = 0;
    function processInput(input){
            home();
    }
    waitForInput(processInput);
}
