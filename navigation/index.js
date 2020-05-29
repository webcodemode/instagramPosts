const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li");
const bars = document.querySelectorAll(".bar")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  links.forEach(link => {
    link.classList.toggle("hide");
  });
  bars.forEach(bars => {
    bars.classList.toggle("change")
  })
});
