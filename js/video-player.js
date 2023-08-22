const mainMobile = document.querySelector(".main--mobile");
const videoMobile = mainMobile.querySelector(".video__video");
const mainDesktop = document.querySelector(".main--desktop");
const videoDesktop = mainDesktop.querySelector(".video__video");

// PLAY AND PAUSE - MOBILE AND DESKTOP
setTimeout(() => {
  videoMobile.muted = false;
  videoDesktop.muted = false;
}, 1000);

const handlePlayPause = (playPauseBtn, timelineAndControls, video) => {
  playPauseBtn.classList.toggle("video__controls__play-pause--paused");
  timelineAndControls.classList.toggle("video__timeline-controls--active");

  video.paused ? video.play() : video.pause();
};

const handleAutoplay = (autoPlayBtn) => {
  autoPlayBtn.classList.toggle("video__controls__autoplay--off");
};

const handleCaptions = (captionsBtn) => {
  captionsBtn.classList.toggle("video__controls__captions--on");
};

// PLAY AND PAUSE - MOBILE
const playPauseMobile = mainMobile.querySelector(
  ".video__controls__play-pause"
);
const autoPlayMobile = mainMobile.querySelector(".video__controls__autoplay");
const captionsMobile = mainMobile.querySelector(".video__controls__captions");
const timelineAndControlsMobile = mainMobile.querySelector(
  ".video__timeline-controls"
);

videoMobile.addEventListener("click", () =>
  handlePlayPause(playPauseMobile, timelineAndControlsMobile, videoMobile)
);

playPauseMobile.addEventListener("click", () =>
  handlePlayPause(playPauseMobile, timelineAndControlsMobile, videoMobile)
);

autoPlayMobile.addEventListener("click", () => {
  handleAutoplay(autoPlayMobile);
});

captionsMobile.addEventListener("click", () => {
  handleCaptions(captionsMobile);
});

// PLAY AND PAUSE - DESKTOP
const playPauseDesktop = mainDesktop.querySelector(
  ".video__controls__play-pause"
);
const autoPlayDesktop = mainDesktop.querySelector(".video__controls__autoplay");
const captionsDesktop = mainDesktop.querySelector(".video__controls__captions");
const timelineAndControlsDesktop = mainDesktop.querySelector(
  ".video__timeline-controls"
);

videoDesktop.addEventListener("click", () =>
  handlePlayPause(playPauseDesktop, timelineAndControlsDesktop, videoDesktop)
);

playPauseDesktop.addEventListener("click", () =>
  handlePlayPause(playPauseDesktop, timelineAndControlsDesktop, videoDesktop)
);

autoPlayDesktop.addEventListener("click", () => {
  handleAutoplay(autoPlayDesktop);
});

captionsDesktop.addEventListener("click", () => {
  handleCaptions(captionsDesktop);
});

// DURATION - MOBILE AND DESKTOP
const videoPercent = (e, timelineContainer) => {
  const rect = timelineContainer.getBoundingClientRect();
  return (Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width) * 100;
};

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

function formatDuration(time) {
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`;
  }
}

// DURATION - MOBILE
const currentTimeElementMobile = mainMobile.querySelector(
  ".video__controls__duration__current-time"
);
const totalTimeElementMobile = mainMobile.querySelector(
  ".video__controls__duration__total-time"
);
const timelineContainerMobile = mainMobile.querySelector(
  ".video__timeline-container"
);

timelineContainerMobile.addEventListener("mousemove", (e) => {
  timelineContainerMobile.style.setProperty(
    "--preview-position",
    `${videoPercent(e, timelineContainerMobile)}%`
  );
});

timelineContainerMobile.addEventListener("click", (e) => {
  videoMobile.currentTime =
    (videoMobile.duration * videoPercent(e, timelineContainerMobile)) / 100;
});

videoMobile.addEventListener("loadeddata", () => {
  totalTimeElementMobile.textContent = formatDuration(videoMobile.duration);
});

videoMobile.addEventListener("timeupdate", () => {
  const videoProgress = (videoMobile.currentTime / videoMobile.duration) * 100;

  timelineContainerMobile.style.setProperty(
    "--progress-position",
    `${Math.round(videoProgress)}%`
  );

  currentTimeElementMobile.textContent = formatDuration(
    videoMobile.currentTime
  );
});

// DURATION - Desktop
const currentTimeElementDesktop = mainDesktop.querySelector(
  ".video__controls__duration__current-time"
);
const totalTimeElementDesktop = mainDesktop.querySelector(
  ".video__controls__duration__total-time"
);
const timelineContainerDesktop = mainDesktop.querySelector(
  ".video__timeline-container"
);

timelineContainerDesktop.addEventListener("mousemove", (e) => {
  timelineContainerDesktop.style.setProperty(
    "--preview-position",
    `${videoPercent(e, timelineContainerDesktop)}%`
  );
});

timelineContainerDesktop.addEventListener("click", (e) => {
  videoDesktop.currentTime =
    (videoDesktop.duration * videoPercent(e, timelineContainerDesktop)) / 100;
});

videoDesktop.addEventListener("loadeddata", () => {
  totalTimeElementDesktop.textContent = formatDuration(videoDesktop.duration);
});

videoDesktop.addEventListener("timeupdate", () => {
  const videoProgress =
    (videoDesktop.currentTime / videoDesktop.duration) * 100;

  timelineContainerDesktop.style.setProperty(
    "--progress-position",
    `${Math.round(videoProgress)}%`
  );

  currentTimeElementDesktop.textContent = formatDuration(
    videoDesktop.currentTime
  );
});

// VOLUME - MOBILE AND DESKTOP
const handleVolumeBtn = (volumeBtn, video) => {
  video.muted = !video.muted;
  volumeBtn.classList.toggle("video__controls__volume-btn--muted");
};

const handleVolumeRange = (e, video) => {
  video.volume = e.target.value;
  video.muted = e.target.value === 0;
};

const handleVideoVolume = (volumeRange, volumeBtn, video) => {
  volumeRange.value = video.volume;
  let volumeLevel;
  if (video.muted || video.volume === 0) {
    volumeRange.value = 0;
    volumeLevel = "muted";
  } else if (video.volume >= 0.5) {
    volumeLevel = "high";
  } else {
    volumeLevel = "low";
  }

  volumeBtn.dataset.volume = volumeLevel;
};

// VOLUME - MOBILE
const volumeBtnMobile = mainMobile.querySelector(
  ".video__controls__volume-btn"
);
const volumeRangeMobile = mainMobile.querySelector(
  ".video__controls__volume-range"
);

volumeBtnMobile.addEventListener("click", () => {
  handleVolumeBtn(volumeBtnMobile, videoMobile);
});

volumeRangeMobile.addEventListener("input", (e) => {
  handleVolumeRange(e, videoMobile);
});

videoMobile.addEventListener("volumechange", () => {
  handleVideoVolume(volumeRangeMobile, volumeBtnMobile, videoMobile);
});

// VOLUME - Desktop
const volumeBtnDesktop = mainDesktop.querySelector(
  ".video__controls__volume-btn"
);
const volumeRangeDesktop = mainDesktop.querySelector(
  ".video__controls__volume-range"
);

volumeBtnDesktop.addEventListener("click", () => {
  handleVolumeBtn(volumeBtnDesktop, videoDesktop);
});

volumeRangeDesktop.addEventListener("input", (e) => {
  handleVolumeRange(e, videoDesktop);
});

videoDesktop.addEventListener("volumechange", () => {
  handleVideoVolume(volumeRangeDesktop, volumeBtnDesktop, videoDesktop);
});

// FULL SCREEN - MOBILE AND DESKTOP
const handleFullScreen = (fullScreenBtn, playerFullScreen) => {
  fullScreenBtn.classList.toggle("video__controls__full-screen--on");

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    playerFullScreen.requestFullscreen();
  }
};

// FULL SCREEN - MOBILE
const fullScreenBtnMobile = mainMobile.querySelector(
  ".video__controls__full-screen"
);
const playerFullScreenMobile = mainMobile.querySelector(
  ".video__player-full-screen"
);

fullScreenBtnMobile.addEventListener("click", () => {
  handleFullScreen(fullScreenBtnMobile, playerFullScreenMobile);
});

// FULL SCREEN - Desktop
const fullScreenBtnDesktop = mainDesktop.querySelector(
  ".video__controls__full-screen"
);
const playerFullScreenDesktop = mainDesktop.querySelector(
  ".video__player-full-screen"
);

fullScreenBtnDesktop.addEventListener("click", () => {
  handleFullScreen(fullScreenBtnDesktop, playerFullScreenDesktop);
});
