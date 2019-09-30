export const formatTime = function(timeInSeconds) {
  const seconds = `0${timeInSeconds % 60}`.slice(-2)
  const minutes = `0${Math.floor(timeInSeconds / 60)}`.slice(-2)
  return `${minutes} : ${seconds}`
}
