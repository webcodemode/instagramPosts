const switchBtn = document.querySelector(".switchBtn");
const container = document.querySelector(".container");
const threadEnd = document.querySelector(".threadEnd");

switchBtn.addEventListener("click", () => container.classList.toggle("on"));

threadEnd.addEventListener("click", () => {
    if(switchBtn.checked) {
        switchBtn.checked = false;
        container.classList.toggle("on");
    } else {
        switchBtn.checked = true;
        container.classList.toggle("on");
    }
})