var readlineSync = require("readline-sync");
const chalk = require("chalk");
score = 0;
var q1 = {
  question : "What are Wanda and Vision's stage names for their magic act? \n" ,
  answer : "Glamour and Illusion"
}
var q2 = {
  question :"What does S.W.O.R.D stand for? \n" ,
  answer : "Sentient Weapon Observation Response Division"
}
var q3 = {
  question :"What does Vision dress up as for Halloween? \n" ,
  answer : "Mexican wrestler"
}
var q4 = {
  question :"What is Loki God of? \n" ,
  answer : "Mischief"
}
var q5 = {
  question :"What does TVA stand for?\n" ,
  answer : "Time Variance Authority"
}
var q6 = {
  question :"Who arrests child Sylvie and brings her to the TVA?\n" ,
  answer : "Renslayer"
}
var q7 = {
  question : "What is the name of the security device that the TVA uses to control variants? \n" ,
  answer : "Time Twister"
}


var questions = [q1, q2, q3, q4, q5, q6, q7];
function quiz(){

  for(var i=0; i<questions.length; i++){
    
    var userAnswer = readlineSync.question(chalk.cyan(questions[i].question));
    if( userAnswer.toUpperCase() == questions[i].answer.toUpperCase()){
      console.log(chalk.green("right answer!"));
      score++;
    }
    else{
      console.log(chalk.red("wrong answer!"));
      console.log(chalk.blackBright.bold("The right answer is " + questions[i].answer + "."));
    }
  }

  console.log(chalk.cyanBright.italic("Congratulations! Your score is " + score));
  
}

var userName = readlineSync.question(chalk.blackBright.bold("Hi! What's your name?\n"));
console.log(chalk.blackBright.bold("Hey " + chalk.italic(userName) + "!"));
console.log(chalk.blackBright.bold("Let's play a mini marvel phase 4 quiz!\n"));
quiz();

