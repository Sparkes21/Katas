let prompt = require("prompt-sync")();

// code below (replace this example)

const number = Math.floor(Math.random() * 100);
let attemptsArr = [];
let guess;


while (guess !== number) {
  let guess = prompt("Guess a number between 1-100: ");
  if (attemptsArr.includes(guess)) {
    console.log("Already guessed.");
    continue;
  } else if (!isNaN(guess)) {
    attemptsArr.push(guess);
  } 

  if (guess > number) {
    console.log('Too High!')
  } else if (guess < number) {
    console.log('Too Low!')
  } else if (isNaN(guess)) {
    console.log('Not a number, try again!');
  } else {
    console.log(`Correct! You took ${attemptsArr.length} attempts.`)
    break;

  }
}


