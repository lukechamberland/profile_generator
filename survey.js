const readline = require('readline');

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};


const ansEle = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;

const question = function () {
  if (i < 7) {
    rl.question(`${questions[i]}\n`, (answer) => {
      ansEle[i] = answer;
      i++;
      console.log();
      question();
    });
  } else {
    rl.close()
    console.log("Your New Profile:");
    setTimeout(() => console.log(`
    ${ansEle[0]} likes ${ansEle[1]} while ${ansEle[2]} is playing in his airpods. 
    ${ansEle[0]} likes ${ansEle[4]} if he had to pick one meal to eat for his favourite meal, ${ansEle[3]}. 
    ${ansEle[0]} absolutely loves ${ansEle[5]} and it his favourite sport, by far.
    ${ansEle[0]}'s superpower is ${ansEle[6]}!
  `), 2000);
  }
}

question();