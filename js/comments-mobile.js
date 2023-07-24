const commentsExpand = document.querySelector(".comments__expand");
const commentsContent = document.querySelector(".comments__content");
const commentsClose = document
  .querySelector(".comments__header")
  .querySelector("button");

const handleCommentsActive = () => {};

commentsExpand.addEventListener("click", () => {
  commentsContent.classList.add("comments__content--active");
});

commentsClose.addEventListener("click", () => {
  commentsContent.classList.remove("comments__content--active");
});
