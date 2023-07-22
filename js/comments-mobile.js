const commentsExpand = document.querySelector(".comments__expand");
const commentsContent = document.querySelector(".comments__content");
const commentsClose = document
  .querySelector(".comments__content__header")
  .querySelector("button");
const body = document.querySelector("body");

const handleCommentsActive = () => {};

commentsExpand.addEventListener("click", () => {
  commentsContent.classList.add("comments__content--active");
  body
});

commentsClose.addEventListener("click", () => {
  commentsContent.classList.remove("comments__content--active");
});

console.log(commentsClose);
