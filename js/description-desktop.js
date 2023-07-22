const description = document.querySelector(".video__description--desktop");
const descriptionContainer = document.querySelector(
  ".video__description__container"
);
const descriptionLess = document.querySelectorAll(".video__description__less");

const handleDescriptionActive = () => {
  description.classList.add("video__description--desktop--active");
  description.removeEventListener("click", handleDescriptionActive);
};

description.addEventListener("click", handleDescriptionActive);

descriptionLess.forEach((less) => {
  less.addEventListener("click", () => {
    description.classList.remove("video__description--desktop--active");

    setTimeout(() => {
      description.addEventListener("click", handleDescriptionActive);
    }, 1);
  });
});
