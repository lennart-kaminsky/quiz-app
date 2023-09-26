//Array aller Answer Buttons
const answerButton = document.querySelectorAll('[data-js="answer-btn"]');
//Array aller Answers
const answer = document.querySelectorAll('[data-js="answer"]');

for (let i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener("click", () => {
    answerButton[i].classList.toggle("answer-button-hide");
    answer[i].classList.toggle("hide-answer");

    if (answerButton[i].classList.contains("answer-button-hide")) {
      answerButton[i].innerHTML = "Hide Answer";
    } else {
      answerButton[i].innerHTML = "Show Answer";
    }
  });
}
