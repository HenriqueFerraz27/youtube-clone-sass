const videoDuration = document.querySelector(".video__video");
const currentTimeElement = document.querySelector(".video__controls__duration__current-time");
const totalTimeElement = document.querySelector(".video__controls__duration__total-time");
const timelineContainer = document.querySelector(".video__timeline-container");
const timeline = document.querySelector(".video__timeline");
console.log(timeline);

timelineContainer.addEventListener("mousemove", (e) => {
  timelineContainer.style.setProperty("--preview-position", `${videoPercent(e)}%`)
})
timelineContainer.addEventListener("click", (e) => {
  videoDuration.currentTime = (videoDuration.duration * videoPercent(e)) / 100
})

const videoPercent = (e) => {
  const rect = timelineContainer.getBoundingClientRect()
  return (Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width) * 100
}

videoDuration.addEventListener("loadeddata", () => {
  totalTimeElement.textContent = formatDuration(videoDuration.duration)
})

videoDuration.addEventListener("timeupdate", () => {
  const videoProgress = (videoDuration.currentTime / videoDuration.duration) * 100;

  timelineContainer.style.setProperty("--progress-position", `${Math.round(videoProgress)}%`)

  currentTimeElement.textContent = formatDuration(videoDuration.currentTime)
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})

function formatDuration(time) {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`
  }
}