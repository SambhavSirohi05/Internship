const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let target = Math.floor(Math.random() * 100) + 1;

function ask() {
  rl.question("Guess a number (1–100): ", (input) => {
    let guess = Number(input);

    if (guess === target) {
      console.log("Correct, The number was " + target);
      rl.close();
    } else if (guess < target) {
      console.log("Too low");
      ask();
    } else {
      console.log("Too high");
      ask();
    }
  });
}

ask();