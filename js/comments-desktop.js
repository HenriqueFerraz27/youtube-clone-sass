const commentsDesktop = document.querySelector(".video__comments--desktop");
const commentsHeader = document.querySelector(".video__comments--desktop").querySelector(".comments__header");
const commentsLess = document.querySelector(".comments__less")

const handleCommentsDesktopActive = () => {
  commentsDesktop.classList.add("video__comments--desktop--active");

  commentsDesktop.removeEventListener("click", handleCommentsDesktopActive);
};

const handleCommentsClose = () => {
  commentsDesktop.classList.remove("video__comments--desktop--active");

  setTimeout(() => {
    commentsDesktop.addEventListener("click", handleCommentsDesktopActive);
  }, 1);
};

commentsDesktop.addEventListener("click", handleCommentsDesktopActive);
commentsHeader.addEventListener("click", handleCommentsClose);
commentsLess.addEventListener("click", handleCommentsClose);

