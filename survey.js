
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name;
let activity;
let listening;
let meal;
let favouriteFood;
let favouriteSport;
let superPower;

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  name = answer;

  rl.question('What\'s an activity you like doing? ', (answer) => {
    activity = answer;

    rl.question('What do you listen to while doing that? ', (answer) => {
      listening = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        meal = answer;

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          favouriteFood = answer;

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            favouriteSport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              superPower = answer;

              const bio = `Hello, my name is ${name}. I enjoy ${activity} while listening to ${listening}. My favorite meal is ${meal}, and I love eating ${favouriteFood} for that meal. My absolute favorite sport is ${favouriteSport}, and my superpower is ${superPower}.`;

              console.log(bio);
              rl.close();
            });
          });
        });
      });
    });
  });
});
