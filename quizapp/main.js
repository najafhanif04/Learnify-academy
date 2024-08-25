let questions = [
    {
        question: "HTML Stands for ?",
        option: [
            "Hypertext Markup Language",
            "HTML",
            "cascading stylesheet",
            "Hypertext Mockup Language",
        ],
        correctans: "Hypertext Markup Language",
    },
    {
        question: "CSS Stands for?",
        option: [
            "case stylesheet",
            "case code stylesheet",
            "cascading stylesheet",
            "Hypertext Mockup Language",
        ],
        correctans: "cascading stylesheet",
    },
    {
        question: "RAM Stands for?",
        option: [
            "Read Only Memory",
            "Read a Module",
            "Random Access Memory",
            "Random Account Model",
        ],
        correctans: "Random Access Memory",
    },
];

const questionHeading = document.getElementById("question")
const answerContainer = document.getElementById("bottom-div")
const currentQuestionDiv = document.getElementById("currentquestionnumber");
const totalQuestionDiv = document.getElementById("totalquestionnumber");
const resultDiv = document.getElementById("result");
const mainDiv = document.getElementById("main");
const totalScore = document.getElementById("markvalue");

var currentQuestionIndex = 0;
var score = 0;

function showQuestion() {
    questionHeading.innerHTML = questions[currentQuestionIndex].question;

    currentQuestionDiv.innerText = currentQuestionIndex + 1;
    totalQuestionDiv.innerText = questions.length;
    answerContainer.innerHTML = "";

    const options = questions[currentQuestionIndex].option;
    const labels = ["A", "B", "C", "D"]; // Labels for options

    for (let index = 0; index < questions[currentQuestionIndex].option.length; index++) {
        
        var option = questions[currentQuestionIndex].option[index];
        var label = labels[index];
        var correct = questions[currentQuestionIndex].correctans;

        answerContainer.innerHTML += `
        <button onclick="checkAnswer('${option}', '${correct}')" class="opt-btn">${label}. ${option}</button>
        `
    }
}

showQuestion();

function optbtn() {
    currentQuestionIndex++;
    showQuestion();
}

function checkAnswer(option, correct) {
    if (option === correct) {
        score++;
        nextQuestion()
    }

    else {
        nextQuestion();
    }

   
}

function nextQuestion() {
    if(currentQuestionIndex + 1 == questions.length) {
        totalScore.innerText = `${score} out of ${questions.length}`;
        resultDiv.style.display = "block"
        mainDiv.style.display = "none"
    }
    else {
        currentQuestionIndex++;
        showQuestion();
    }
}