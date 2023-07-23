// COMMENTS

const commentsExpand = document.querySelector(".comments__expand");
const commentsContent = document.querySelector(".comments__content");
const commentsClose = document
  .querySelector(".comments__header")
  .querySelector("button");
const body = document.querySelector("body");

const handleCommentsActive = () => {};

commentsExpand.addEventListener("click", () => {
  commentsContent.classList.add("comments__content--active");
  body;
});

commentsClose.addEventListener("click", () => {
  commentsContent.classList.remove("comments__content--active");
});

// COMMENT

const comments = document.querySelectorAll(".comment");

comments.forEach((comment) => {
  const commentAnswers = comment.querySelector(".comment__answers");
  const commentAnswersExpand = comment.querySelector(
    ".comment__answers__expand"
  );

  commentAnswersExpand &&
    commentAnswersExpand.addEventListener("click", () => {
      commentAnswers.classList.toggle("comment__answers--active");
    });
});
