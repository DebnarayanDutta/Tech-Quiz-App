var readLineSync = require("readline-sync")
const chalk = require('chalk');
var userName = readLineSync.question("Enter Your name? ")
console.log(`Welcome ${userName} in my quizz`)

var QuestionOne= {
  question:"From which country does Apple company belong?",
  a:"India",
  b:"Germany",
  c:"USA",
  d:"China",
  answer:"c"
}
var QuestionTwo= {
  question:"Which smartphone brand offers the highest charging speed under 20k price smartphone?",
  a:"Oppo",
  b:"Samsung",
  c:"RealMe",
  d:"Redmi",
  answer:"c"
}
var QuestionThree={
  question:"Among these which is a Indian smartphone brand?",
  a:"Moto",
  b:"Mi",
  c:"Infinix",
  d:"Micromax",
  answer:"d"
}

var quizArrary=[QuestionOne,QuestionTwo,QuestionThree]
var scoreValue=0
for ( let i=0;i<quizArrary.length;i++){
  console.log(chalk.blue(quizArrary[i].question))
  console.log("a: ",quizArrary[i].a)
  console.log("b: ",quizArrary[i].b)
  console.log("c: ",quizArrary[i].c)
  console.log("d: ",quizArrary[i].d)
  var userAnswer = readLineSync.question(chalk.green("Your Answer "))
  if (userAnswer===quizArrary[i].answer){
    scoreValue=scoreValue+1
  }
  console.log(chalk.yellow(scoreValue))
}
console.log(chalk.yellow("Total score",scoreValue))