function beginQuiz(){
    console.log("beginQuiz")
    window.location.href = "/Question1"
}

function wrongAnswer() {
    document.querySelector("#result").textContent = "You Chose The Wrong Answer, Please Try Again!";
}

function correctAnswer1() {
    alert("You're Answer is Correct. Here's You're Next Question.")
    window.location.href = "/Question2"
}

function correctAnswer2() {
    alert("You're Answer is Correct. Here's You're Next Question.")
    window.location.href = "/Question3"
}

function correctAnswer3() {
    alert("You're Answer is Correct. Here's You're Next Question.")
    window.location.href = "/Question4"
}

function correctAnswer4() {
    alert("You're Answer is Correct. Great Job!!")
    window.location.href = "/Alldone"
}

function highScoreLoad() {
    const name = window.localStorage.name;
    document.querySelector("#name").textContent = name;
}

function onNameSubmit() {
    window.localStorage.name = document.querySelector("#name").value;
    window.location.href = "/Highscore";
}

