let prompt = require("prompt-sync")();

// code below (replace this example)

let number = Math.floor(Math.random() * 100);
let attempts = 0;
let answer = prompt("Guess a number: ");
if (answer < number) {
  console.log("Too Low!")
  attempts++;
}
if (answer > number) {
  console.log("Too High!")
  attempts++;
}
if (isNaN(answer)) {
  console.log('Not a number! Try again!')
}
if (answer === number) {
  console.log(`You got it! You took ${attempts} attempts!`)
}
console.log("You answered: " + answer);
