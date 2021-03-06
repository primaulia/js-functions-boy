// update the h1 to say higher or lower
// or if the number guess is correct, we change the body color

var randomNumber = randomFn(0, 10)
var guessedNum = prompt('The first guess: type your number!')
var isCorrect = false
var gameOver = false

function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function updateH1 (newH1) {
  var h1 = document.querySelector('h1')
  // updated the property of h1 dom node
  h1.textContent = newH1
}

// fn that checks numbers with the random number
function askForANumber (guessedNum, randomNumber) {
  guessedNum = parseInt(guessedNum)

  if (guessedNum > randomNumber) {
    updateH1('lower, randomNumber is ' + randomNumber)
  } else if (guessedNum < randomNumber) {
    updateH1('higher, randomNumber is ' + randomNumber)
  }

  if (guessedNum === randomNumber) {
    updateH1('correct')
    gameOver = true
  }

  checkForGameover()
}

function newGame () {
  askForANumber(guessedNum, 5)
}

function checkForGameover () {
  if (gameOver) {
    alert('reveal the restart button now, stop the game')
  } else {
    guessedNum = prompt('Type your number again!')
    askForANumber(guessedNum, 5)
  }
}

if (!gameOver) {
  newGame()
}
