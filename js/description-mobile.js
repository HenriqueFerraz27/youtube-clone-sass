const descriptionExpand = document.querySelector(".description__expand");
const descriptionContainerMobile = document.querySelector(
  ".description__container"
);
const descriptionClose = document
  .querySelector(".description__header")
  .querySelector("button");

descriptionExpand.addEventListener("click", () => {
  descriptionContainerMobile.classList.add("description__container--active");
});

descriptionClose.addEventListener("click", () => {
  descriptionContainerMobile.classList.remove(
    "description__container--active"
  );
});