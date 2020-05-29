const emailField = document.querySelector("#email")
const passField = document.querySelector("#pass")
const mouth = document.querySelector(".mouth")
const leftEye = document.querySelector("#left")
const rightEye = document.querySelector("#right")
const buttonLogin = document.querySelector(".btn")

emailField.addEventListener("focus", happy)
passField.addEventListener("focus", hide)
buttonLogin.addEventListener("focus", go)

function happy() {
    mouth.style.animation = "first 0.4s forwards"
}

function hide() {
    leftEye.style.animation = "second 0.4s forwards"
    rightEye.style.animation = "second 0.4s forwards"
}

function go() {
    leftEye.style.animation = "last 0.4s forwards"
    rightEye.style.animation = "last 0.4s forwards"
    mouth.style.animation = "lastLast 0.4s forwards"
}



