const quizdata = [
    {
        question: 'when did javascript invented ?',
        a: "1993",
        b: "1994",
        c: "1995",
        d: "1996",
        correct: "c",
    },
    {
        question: 'index of the letter F in this array?["Have Fun with Arduino"]',
        a: "6",
        b: "5",
        c: "4",
        d: "7",
        correct: "b",
    },
    {
        question: 'Resolving errors in a program is known as',
        a: "Debugging",
        b: "Error Checking",
        c: "Re-fixing",
        d: "Problem Solving",
        correct: "a",
    },
    {
        question: 'What does CSS stand for?',
        a: "Creative Style Sheets",
        b: "Computer Style Sheets",
        c: "Colorful Style Sheets",
        d: "Cascading Style Sheets",
        correct: "d",
    },
    {
        question: 'Which character is used to indicate an end tag?',
        a: ">",
        b: "^",
        c: "*",
        d: "/",
        correct: "d",
    },
];

const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const question_indicator = document.getElementById("indicator");

const quiz_header = document.getElementById("quiz_header");
const submitbtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizdata[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    question_indicator.innerHTML = `question no ${currentQuiz+1} / ${quizdata.length}`

}



function getSeleceted() {


    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}



function deselectAnswers() {

    answersEls.forEach((answerEl) => {

        answerEl.checked = false;

    });
}




submitbtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSeleceted();

    if (answer) {
        if (answer === quizdata[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizdata.length) {
            loadQuiz();

        }
        else {

            quiz_header.innerHTML = `<h3>you answered Correctly ${score} of ${quizdata.length} Questions.</h3>`;

        }
    }
});