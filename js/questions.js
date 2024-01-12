// questions for the quiz
const quizData = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<javascript>",
    c: "<scripting>",
    d: "<js>",
    correct: "a",
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    a: "True",
    b: "False",

    correct: "b",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <body> section",
    b: "Both the <head> section and the <body> section",
    c: "The <head> section",

    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;

  console.log(currentQuizData.d);
  //d_text.innerText = currentQuizData.d;
}

function getSelected() {
  var answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  var answer = getSelected();
  console.log(answer);
});
