var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name? ");
console.log("----------------------------------------------------------")
console.log("Welcome " + userName + "! to ---- DO YOU KNOW ANKIT ? ----");
console.log("----------------------------------------------------------")

// PLAY FUNCTION

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You are right!");
    score = score + 1;

  } else {
    console.log("You are wrong!");
  }
  console.log("Current Score : " + score);
  console.log("---------------------")
}

// ARRAY OF QUESTIONS

var questions = [
  {
    question: "Where do i live? ",
    answer: "Bangalore"
  },
  {
    question: "What is my favourite food? ",
    answer: "Samosa"
  },
  {
    question: "What is my age? ",
    answer: "22"
  },
  {
    question: "What is my favourite color? ",
    answer: "Green"
  }
]

// for loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY ! You Scored : " + score);