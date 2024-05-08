// VARIÁVEIS
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// FUNÇÃO CALLBACK
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(inputNumber.value >= 0 && inputNumber.value <= 10) {
    if(Number(inputNumber.value) == randomNumber) { // SCREEN1 -> SCREEN2
      toggleScreen()
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa(s)!`
    }
    inputNumber.value = ""
    xAttempts++
  } else {
    alert(`O número digitado deve ser de 0 a 10`)
  }
  
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

// EVENTOS
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleEnter)