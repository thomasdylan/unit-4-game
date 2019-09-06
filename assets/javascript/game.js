//Header 
$("#header").html("CRYSTAL COLLECTOR");

//global variables
var gameStarted = false;
var diamond = Math.floor(Math.random() * 12) + 1;
var ruby = Math.floor(Math.random() * 12) + 1;
var sapphire = Math.floor(Math.random() * 12) + 1;
var emerald = Math.floor(Math.random() * 12) + 1;
var computerNumber = Math.floor(Math.random() * 102) + 19;
var currentNumber = null;
var wins = 0;
var losses = 0;

//Put starting numbers on screen
$("#numberToGet").html(computerNumber);
$("#currentNumber").html(currentNumber);
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);

//Reset function
function reset() {
     //resets variables
     diamond = Math.floor(Math.random() * 12) + 1;
     ruby = Math.floor(Math.random() * 12) + 1;
     sapphire = Math.floor(Math.random() * 12) + 1;
     emerald = Math.floor(Math.random() * 12) + 1;
     computerNumber = Math.floor(Math.random() * 102) + 19;
     currentNumber = null;
     //resets numbers
     $("#numberToGet").html(computerNumber);
     $("#currentNumber").html(currentNumber);
     //updates win/loss
     $("#wins").html("Wins: " + wins);
     $("#losses").html("Losses: " + losses);
}

//On click event for Diamond
$("#diamond").click(function () {
     currentNumber = currentNumber + diamond;
     $("#currentNumber").html(currentNumber);
     if (currentNumber === computerNumber) {
          wins++;
          reset();
     } else if (currentNumber > computerNumber) {
          losses++;
          reset();
     };
});

//On click event for Ruby
$("#ruby").click(function () {
     currentNumber = currentNumber + ruby;
     $("#currentNumber").html(currentNumber);
     if (currentNumber === computerNumber) {
          wins++;
          reset();
     } else if (currentNumber > computerNumber) {
          losses++;
          reset();
     };
});

//On click event for Sapphire
$("#sapphire").click(function () {
     currentNumber = currentNumber + sapphire;
     $("#currentNumber").html(currentNumber);
     if (currentNumber === computerNumber) {
          wins++;
          reset();
     } else if (currentNumber > computerNumber) {
          losses++;
          reset();
     };
});

//On click event for Emerald
$("#emerald").click(function () {
     currentNumber = currentNumber + emerald;
     $("#currentNumber").html(currentNumber);
     if (currentNumber === computerNumber) {
          wins++;
          reset();
     } else if (currentNumber > computerNumber) {
          losses++;
          reset();
     };
});














/* The player will have to guess the answer, just like in Word Guess.This time, though, the player will guess with numbers instead of letters.

X There will be four crystals displayed as buttons on the page.
X  The player will be shown a random number at the start of the game.
X When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
X Your game will hide this amount until the player clicks a crystal.
X When they do click one, update the player's score counter.
X The player wins if their total score matches the random number from the beginning of the game.
X The player loses if their score goes above the random number.
X The game restarts whenever the player wins or loses.
X When the game begins again, the player should see a new random number.Also, all the crystals will have four new hidden values.Of course, the user's score (and score counter) will reset to zero.
X The app should show the number of games the player wins and loses.To that end, do not refresh the page as a means to restart the game.
     Option 1 Game design notes
X The random number shown at the start of the game should be between 19 - 120.
X Each crystal should have a random hidden value between 1 - 12. */