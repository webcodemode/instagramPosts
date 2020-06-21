const switchBtn = document.querySelector(".switchBtn");
const container = document.querySelector(".container");
const am = document.querySelector(".am");
const pm = document.querySelector(".pm");

switchBtn.addEventListener("click", () => container.classList.toggle("on"));

am.addEventListener("click", () => {
    if(switchBtn.checked) {
        switchBtn.checked = false;
        container.classList.toggle("on");
    } else {
        return;
    }
})

pm.addEventListener("click", () => {
    if(switchBtn.checked) {
        return;
    } else {
        switchBtn.checked = true;
        container.classList.toggle("on");
    }
})