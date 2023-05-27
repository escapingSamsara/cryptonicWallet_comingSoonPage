export const timer = () => {
  // Set the date we're counting down to
  let countDownDate = new Date('June 5, 2023 15:37:25').getTime()

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime()
    // Find the distance between now and the count down date
    let distance = countDownDate - now
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))

    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Output the result in an element with id="demo"
    document.getElementById('days').innerHTML = days < 10 ? '0' + days : days
    document.getElementById('hours').innerHTML =
      hours < 10 ? '0' + hours : hours
    document.getElementById('minutes').innerHTML =
      minutes < 10 ? '0' + minutes : minutes
    document.getElementById('seconds').innerHTML =
      seconds < 10 ? '0' + seconds : seconds
    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x)
      document.getElementById('days').innerHTML = '00'
      document.getElementById('hours').innerHTML = '00'
      document.getElementById('minutes').innerHTML = '00'
      document.getElementById('seconds').innerHTML = '00'
    }
  }, 1000)
}
