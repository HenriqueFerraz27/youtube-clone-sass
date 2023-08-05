const videoVolume = document.querySelector(".video__video");
const volumeBtn = document.querySelector(".video__controls__volume-btn");
const volumeRange = document.querySelector(".video__controls__volume-range");

volumeBtn.addEventListener("click", () => {
  videoVolume.muted = !videoVolume.muted;
  volumeBtn.classList.toggle("video__controls__volume-btn--muted");
});

volumeRange.addEventListener("input", (e) => {
  videoVolume.volume = e.target.value;
  videoVolume.muted = e.target.value === 0;
});

videoVolume.addEventListener("volumechange", () => {
  volumeRange.value = videoVolume.volume;
  let volumeLevel;
  if (videoVolume.muted || videoVolume.volume === 0) {
    volumeRange.value = 0;
    volumeLevel = "muted";
  } else if (videoVolume.volume >= 0.5) {
    volumeLevel = "high";
  } else {
    volumeLevel = "low";
  }

  volumeBtn.dataset.volume = volumeLevel
  
});
