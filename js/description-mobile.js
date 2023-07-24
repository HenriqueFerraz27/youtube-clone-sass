const descriptionExpand = document.querySelector(".description__expand");
const descriptionContainer = document.querySelector(
  ".description__container"
);
const descriptionClose = document
  .querySelector(".description__header")
  .querySelector("button");

descriptionExpand.addEventListener("click", () => {
  descriptionContainer.classList.add("description__container--active");
});

descriptionClose.addEventListener("click", () => {
  descriptionContainer.classList.remove(
    "description__container--active"
  );
});