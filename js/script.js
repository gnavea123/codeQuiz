//initial js script

// function startQuiz() {
//   windows.location =
//     "https://gnavea123.github.io/codeQuiz/displayquestions.html";
//   if (typeof window === "undefined") {
//     console.log("Oops, `window` is not defined");
//   }
// }

var questionUrl = "https://gnavea123.github.io/codeQuiz/displayquestions.html";
function gotoLink() {
  console.log(questionUrl);
  window.open(questionUrl);
}
