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

//Dark Mode
const darkmodeButton = document.querySelector('[data-js="checkbox--darkmode"]');
let rootElement = document.documentElement;
//App starts in DarkMode with checkbox checked
let darkmode = true; //used instead of (darkmodeButton.checked) because page always gets reloaded

darkmodeButton.addEventListener("change", () => {
  if (!darkmode) {
    rootElement.style.setProperty("--color-white", "#f0ebeb");
    rootElement.style.setProperty("--first-background-color", "#121111");
    rootElement.style.setProperty("--second-background-color", "#282525");
    darkmode = true;
  } else {
    rootElement.style.setProperty("--color-white", "#121111");
    rootElement.style.setProperty("--first-background-color", "#bebaba");
    rootElement.style.setProperty("--second-background-color", "#f0ebeb");
    darkmode = false;
  }
});

// #7db5cf
