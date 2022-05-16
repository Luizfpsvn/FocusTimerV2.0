//Timer Buttons
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonTimeUp = document.querySelector('.timeUp')
const buttonTimeDown = document.querySelector('.timeDown')

//Timer
let minutes = 25
let seconds = 0
let timerTimerOut
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

//SoundButtons
const buttonForestSound = document.querySelector('.forest')
const buttonRainSound = document.querySelector('.rain')
const buttonCoffeShopSound = document.querySelector('.coffeShop')
const buttonBonfireSound = document.querySelector('.bonfire')

//Sound Buttons Color
const forestFill = document.querySelector('.forestFill')
const rainFill = document.querySelector('.rainFill')
const coffeShopFill = document.querySelector('.coffeShopFill')
const bonfireFill = document.querySelector('.bonfireFill')

//Audio
const forestAudio = new Audio('./assets/Floresta.wav')
const rainAudio = new Audio('./assets/Chuva.wav')
const coffeShopAudio = new Audio('./assets/Cafeteria.wav')
const bonfireAudio = new Audio('./assets/Lareira.wav')
const buttonPress = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
const timeIsOver = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function MoreMinutes() {
  minutes = Number(minutesDisplay.textContent)
  seconds = Number(secondsDisplay.textContent)

  minutes = minutes + 5
  updateTimerDisplay(minutes, seconds)
}

function LessMinutes() {
  minutes = Number(minutesDisplay.textContent)
  seconds = Number(secondsDisplay.textContent)

  if (minutes >= 5) {
    minutes = minutes - 5

    updateTimerDisplay(minutes, seconds)
  } else if (minutes <= 5) {
    minutes = 0
    updateTimerDisplay(minutes, seconds)
  }
}

function Countdown() {
  timerTimerOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    if (minutes <= 0) {
      resetControls()
      timeIsOver.play()
      return
    }

    updateTimerDisplay(minutes, seconds - 1)

    Countdown()
  }, 1000)
}

function play() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}

function pause() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function resetControls() {
  buttonForestSound.classList.remove('selectedSound')
  buttonRainSound.classList.remove('selectedSound')
  buttonCoffeShopSound.classList.remove('selectedSound')
  buttonBonfireSound.classList.remove('selectedSound')

  pause()
  soundsStop()
  updateTimerDisplay(25, 0)
}

function buttonpress() {
  buttonPress.play()
}

function soundSelectedForest() {
  buttonForestSound.classList.add('selectedSound')
  buttonRainSound.classList.remove('selectedSound')
  buttonCoffeShopSound.classList.remove('selectedSound')
  buttonBonfireSound.classList.remove('selectedSound')
  forestAudio.play()
  forestAudio.loop = true
  rainAudio.pause()
  coffeShopAudio.pause()
  bonfireAudio.pause()
  forestFill.classList.add('selectedSound')
  rainFill.classList.remove('selectedSound')
  coffeShopFill.classList.remove('selectedSound')
  bonfireFill.classList.remove('selectedSound')
}

function soundSelectedRain() {
  buttonRainSound.classList.add('selectedSound')
  buttonForestSound.classList.remove('selectedSound')
  buttonCoffeShopSound.classList.remove('selectedSound')
  buttonBonfireSound.classList.remove('selectedSound')
  forestAudio.pause()
  rainAudio.play()
  rainAudio.loop = true
  coffeShopAudio.pause()
  bonfireAudio.pause()
  forestFill.classList.remove('selectedSound')
  rainFill.classList.add('selectedSound')
  coffeShopFill.classList.remove('selectedSound')
  bonfireFill.classList.remove('selectedSound')
}

function soundSelectedCoffeShop() {
  buttonCoffeShopSound.classList.add('selectedSound')
  buttonForestSound.classList.remove('selectedSound')
  buttonRainSound.classList.remove('selectedSound')
  buttonBonfireSound.classList.remove('selectedSound')
  forestAudio.pause()
  rainAudio.pause()
  coffeShopAudio.play()
  coffeShopAudio.loop = true
  bonfireAudio.pause()
  forestFill.classList.remove('selectedSound')
  rainFill.classList.remove('selectedSound')
  coffeShopFill.classList.add('selectedSound')
  bonfireFill.classList.remove('selectedSound')
}

function soundSelectedBonfire() {
  buttonBonfireSound.classList.add('selectedSound')
  buttonForestSound.classList.remove('selectedSound')
  buttonRainSound.classList.remove('selectedSound')
  buttonCoffeShopSound.classList.remove('selectedSound')
  forestAudio.pause()
  rainAudio.pause()
  coffeShopAudio.pause()
  bonfireAudio.play()
  bonfireAudio.loop = true
  forestFill.classList.remove('selectedSound')
  rainFill.classList.remove('selectedSound')
  coffeShopFill.classList.remove('selectedSound')
  bonfireFill.classList.add('selectedSound')
}

function soundsStop() {
  buttonForestSound.classList.remove('selectedSound')
  buttonRainSound.classList.remove('selectedSound')
  buttonCoffeShopSound.classList.remove('selectedSound')
  buttonBonfireSound.classList.remove('selectedSound')
  forestAudio.pause()
  rainAudio.pause()
  coffeShopAudio.pause()
  bonfireAudio.pause()
  forestFill.classList.remove('selectedSound')
  rainFill.classList.remove('selectedSound')
  coffeShopFill.classList.remove('selectedSound')
  bonfireFill.classList.remove('selectedSound')
}

buttonPlay.addEventListener('click', function () {
  play()
  buttonpress()
  Countdown()
})

buttonPause.addEventListener('click', function () {
  pause()
  clearTimeout(timerTimerOut)
})

buttonStop.addEventListener('click', function () {
  buttonpress()

  resetControls()
  clearTimeout(timerTimerOut)
})

buttonTimeUp.addEventListener('click', function () {
  buttonpress()

  MoreMinutes()
})

buttonTimeDown.addEventListener('click', function () {
  buttonpress()

  LessMinutes()
})

buttonForestSound.addEventListener('click', function () {
  soundSelectedForest()
})

buttonRainSound.addEventListener('click', function () {
  soundSelectedRain()
})

buttonCoffeShopSound.addEventListener('click', function () {
  soundSelectedCoffeShop()
})

buttonBonfireSound.addEventListener('click', function () {
  soundSelectedBonfire()
})

buttonForestSound.addEventListener('dblclick', function () {
  soundsStop()
})

buttonRainSound.addEventListener('dblclick', function () {
  soundsStop()
})

buttonCoffeShopSound.addEventListener('dblclick', function () {
  soundsStop()
})

buttonBonfireSound.addEventListener('dblclick', function () {
  soundsStop()
})
