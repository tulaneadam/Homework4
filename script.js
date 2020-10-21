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

