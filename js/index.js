//Array aller Answer Buttons

const answerButton = document.querySelectorAll('[data-js="answer-btn"]');
//Array aller Answers
const answer = document.querySelectorAll('[data-js="answer"]');

for (let i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener("click", () => {
    answerButton[i].classList.toggle("answer-button-hide");
    answer[i].classList.toggle("hide-answer");

    if (answerButton[i].classList.contains("answer-button-hide")) {
      answerButton[i].textContent = "Hide Answer";
    } else {
      answerButton[i].textContent = "Show Answer";
    }
  });
}

//Bookmark
const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);

bookmarkButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === '<i class="fa-regular fa-bookmark"></i>') {
      // //console.log("IF");
      element.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
    } else {
      //console.log("ELSE");
      element.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }
  });
});
