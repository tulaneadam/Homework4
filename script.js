function beginQuiz(){
    console.log("beginQuiz")
    window.location.href = "/Question1"
    
}

function wrongAnswer() {
    document.querySelector("#result").textContent = "You Chose The Wrong Answer, Please Try Again!";
}

function correctAnswer1() {
    document.querySelector("#result").textContent = "You're Answer is Correct. Here's You're Next Question.";
    setTimeout(function() {
        window.location.href = "/Question2"
    }, 500);
}

function correctAnswer2() {
    document.querySelector("#result").textContent = "You're Answer is Correct. Here's You're Next Question.";
    setTimeout(function() {
        window.location.href = "/Question3"
    }, 500);
}

function correctAnswer3() {
    document.querySelector("#result").textContent = "You're Answer is Correct. Here's You're Next Question.";
    setTimeout(function() {
        window.location.href = "/Question4"
    }, 500);
}
function correctAnswer4() {
    document.querySelector("#result").textContent = "You're Answer is Correct. Here's You're Next Question.";
    setTimeout(function() {
        window.location.href = "/Alldone"
    }, 500);
}

function highScoreLoad() {
    const name = window.localStorage.name;
    document.querySelector("#name").textContent = name;
}

function onNameSubmit() {
    window.localStorage.name = document.querySelector("#name").value;
    window.location.href = "/Highscore";
}

let started = null;
let seconds = localStorage.getItem('seconds') || 500;
if(window.location.href.includes('Question1')){
    seconds = 500;
}

function startTimer() {
    document.querySelector("#timer").textContent = seconds;
    started = setInterval(function() { 
      document.querySelector("#timer").textContent = seconds;
      localStorage.setItem('seconds', seconds);
      seconds--; 
      }
    , 1000);
  }

  if(window.location.href.includes('Question')){
    startTimer();
}

if(window.location.href.includes('Alldone')){
    processScore();
}

function processScore(){
    const score = localStorage.getItem('seconds');
    document.querySelector('#score').textContent = score;
}

function onScoreSubmit() {
    window.localStorage.name = document.querySelector("#name").value;
    const score = window.localStorage.getItem('seconds');
    window.localStorage.setItem('score', score);
    window.location.href = "/Highscore";
}

function highScoreLoad() {
    const name = window.localStorage.name;
    const score = window.localStorage.getItem('score')
    document.querySelector("#name").textContent = name;
    document.querySelector("#score").textContent = score;
}
