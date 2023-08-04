const videoPlayPause = document.querySelector(".video__video");
const playPause = document.querySelector(".video__controls__play-pause");

setTimeout(() => (videoPlayPause.muted = false), 100);

playPause.addEventListener("click", () => {
  playPause.classList.toggle("video__controls__play-pause--paused");

  videoPlayPause.paused ? videoPlayPause.play() : videoPlayPause.pause();
});
