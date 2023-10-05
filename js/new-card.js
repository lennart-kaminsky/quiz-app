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
    allCategories.push(element.textContent);
  });

  const newCard = {
    question: cardData.newQuestion,
    answer: cardData.newAnswer,
    categories: allCategories,
    isBookmarked: false,
  };

  cards.push(newCard);
  console.log("Array mit cards", cards);

  event.target.reset();
  event.target.elements.newQuestion.focus();
});
