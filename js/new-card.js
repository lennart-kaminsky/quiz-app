const formMain = document.querySelector('[data-js="form-main"]');

//All Cards
const cards = [];

//New Card
const newCardForm = document.querySelector('[data-js="form--new-card"]');

//New Categories of new card
const addCategoryButton = document.querySelector(
  '[data-js="button--add-category"]'
);
const categoryInput = document.querySelector('[data-js="inputCategory"]');
const categoryContainer = document.querySelector('[data-js="categories--new"]');

addCategoryButton.addEventListener("click", () => {
  const newCategory = document.createElement("span");
  newCategory.classList.add("tag");
  newCategory.setAttribute("data-js", "new-category");
  newCategory.textContent = "#" + categoryInput.value;
  categoryContainer.append(newCategory);
  categoryInput.value = "";
  categoryInput.focus();
});
//When in Input the Enter key should click addCategoryButton
categoryInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addCategoryButton.click();
  }
});

newCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardFormData = new FormData(event.target);
  const cardData = Object.fromEntries(cardFormData);
  //console.log(cardData);

  const allCategorySpans = document.querySelectorAll(
    '[data-js="new-category"]'
  );

  const allCategories = [];

  allCategorySpans.forEach((element) => {
    allCategories.push(element.textContent.slice(1));
  });

  const newCard = {
    question: cardData.newQuestion,
    answer: cardData.newAnswer,
    categories: allCategories,
    isBookmarked: false,
  };

  cards.push(newCard);
  console.log("Array mit cards", cards);
  console.log("Inhalt von category", allCategories);

  categoryContainer.innerHTML = "";
  event.target.reset();
  event.target.elements.newQuestion.focus();

  //Create new Card
  createNewCard(newCard);
});

//Form field text counter

//Create new Card
function createNewCard(newCard) {
  const sectionCard = document.createElement("section");
  sectionCard.classList.add("q-card");

  const pQuestion = document.createElement("p");
  pQuestion.textContent = newCard.question;

  const answerButton = document.createElement("button");
  answerButton.classList.add("answer-button");
  answerButton.type = "button";
  answerButton.setAttribute("data-js", "answer-btn");
  answerButton.textContent = "Show Answer!";

  const pAnswer = document.createElement("p");
  pAnswer.classList.add("answer", "hide-answer");
  pAnswer.setAttribute("data-js", "answer");
  pAnswer.textContent = newCard.answer;

  const divCategoryContainer = document.createElement("div");
  divCategoryContainer.classList.add("categories");

  newCard.categories.forEach((element) => {
    const spanCategory = document.createElement("span");
    spanCategory.classList.add("tag");
    spanCategory.textContent = element;
    divCategoryContainer.append(spanCategory);
  });

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.type = "button";
  bookmarkButton.setAttribute("aria-label", "bookmark");
  bookmarkButton.setAttribute("data-js", "bookmark-button");
  bookmarkButton.innerHTML = '<i class="fa-regular fa-bookmark"></i>';

  sectionCard.append(
    pQuestion,
    answerButton,
    pAnswer,
    divCategoryContainer,
    bookmarkButton
  );
  formMain.append(sectionCard);
}
