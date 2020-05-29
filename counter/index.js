var counter = 0;
const decrement = document.querySelector(".remove")
const increment = document.querySelector(".add")
var result = document.querySelector(".result")

increment.addEventListener("click", add)
decrement.addEventListener("click", remove)

function add() {
    result.innerHTML++
}

function remove() {
    result.innerHTML--
}