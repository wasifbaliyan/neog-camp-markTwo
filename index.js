const readlineAsync = require("readline-sync");
const chalk = require("chalk");

const quiz = [
  {
    ques: "Who is Doraemon's best friend?",
    ans: "Nobita",
    options: ["Nobita", "\nGian", "\nSuneo", "\nSizuka"],
  },
  {
    ques: "What is the name of bully Gian's sister?",
    ans: "Jaiko",
    options: ["Hannah", "\nArtisia", "\nGiani", "\nJaiko"],
  },
  {
    ques:
      "Who is the only main female character in the show whom Nobita likes very much?",
    ans: "Shizuka",
    options: ["Miyoko", "\nShizuka", "\nChristine", "\nRan"],
  },
  {
    ques: "What is Gian's passion?",
    ans: "Singing",
    options: ["Dancing", "\nKarate", "\nSumo Wrestling", "\nSinging"],
  },
  {
    ques: "Who is the most intelligent one?",
    ans: "Dekisugi",
    options: ["Dekisugi", "\nNobita", "\nSuneo", "\nGian"],
  },
  {
    ques: "Who is Gian's sidekick?",
    ans: "Suneo",
    options: ["Dekisugi", "\nNobita", "\nSuneo", "\nJaiko"],
  },
  {
    ques: "What is the name Doraemon's sister?",
    ans: "Dorami",
    options: ["Shizuka", "\nRan", "\nDorami", "\nJaiko"],
  },
  {
    ques: "What is the name Nobita's mother?",
    ans: "Tamako",
    options: ["Tamano", "\nTamao", "\nTakamo", "\nTamako"],
  },
  {
    ques: "Doraemon is afraid of....",
    ans: "Mouse",
    options: ["Spiders", "\nMouse", "\nCockroach", "\nBeetles"],
  },
  {
    ques: "What is the meaning of doraneko?",
    ans: "Stray Cat",
    options: ["Fat Cat", "\nStray Cat", "\nRobot Cat", "\nPet Cat"],
  },
];

let score = 0;
function play(correctAnswer, recievedAnswer) {
  if (recievedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log(chalk.green("Yayy!!! This is the correct answer.\n"));
    score++;
  } else {
    console.log(chalk.bgMagenta("Nayy...Incorrect answer.\n"));
  }
}

console.log(
  chalk.yellow.bold(
    "------" + "DORAEMON QUIZ by @wasifbaliyan" + "------" + "\n"
  )
);

for (let i = 0; i < quiz.length; i++) {
  console.log("=> " + "Question " + (i + 1) + ":");
  let answer = readlineAsync.question(
    chalk.red.bold(quiz[i].ques) + "\n" + chalk.cyan(quiz[i].options) + "\n"
  );
  play(quiz[i].ans, answer);
}

console.log(
  chalk.inverse.bold(
    "Thanks for the survey!!!" + "Your score is " + score + "."
  )
);
