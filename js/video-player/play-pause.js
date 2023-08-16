const videoPlayPause = document.querySelector(".video__video");
const playPause = document.querySelector(".video__controls__play-pause");
const autoPlay = document.querySelector(".video__controls__autoplay");
const captionsBtn = document.querySelector(".video__controls__captions");

setTimeout(() => (videoPlayPause.muted = false), 1000);

const handlePlayPause = () => {
  playPause.classList.toggle("video__controls__play-pause--paused");

  videoPlayPause.paused ? videoPlayPause.play() : videoPlayPause.pause();
}

videoPlayPause.addEventListener("click", handlePlayPause);

playPause.addEventListener("click", handlePlayPause);

autoPlay.addEventListener("click", () => {
  autoPlay.classList.toggle("video__controls__autoplay--off");
});

captionsBtn.addEventListener("click", () => {
  captionsBtn.classList.toggle("video__controls__captions--on");
});
