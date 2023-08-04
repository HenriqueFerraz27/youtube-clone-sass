const videoDuration = document.querySelector(".video__video");
const currentTimeElement = document.querySelector(".video__controls__duration__current-time");
const totalTimeElement = document.querySelector(".video__controls__duration__total-time");


videoDuration.addEventListener("loadeddata", () => {
  totalTimeElement.textContent = formatDuration(videoDuration.duration)
})

videoDuration.addEventListener("timeupdate", () => {
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