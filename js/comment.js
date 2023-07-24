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