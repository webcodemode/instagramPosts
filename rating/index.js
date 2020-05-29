const mouth = document.querySelector(".mouth")
const stars = document.querySelectorAll("label")

for(var i=0; i<stars.length; i++) {
    stars[i].addEventListener("click", emotion)
}

function emotion(e) {
    if (e.target.htmlFor === "star1") {
        mouth.style.borderRadius = "40%"
        mouth.style.borderBottom = "13px solid black"
        mouth.style.width = "25px"
        mouth.style.transform = "rotate(0deg)"
    } else if (e.target.htmlFor === "star2") {
        mouth.style.borderRadius = "40%";
        mouth.style.borderBottom = "3px solid black"
        mouth.style.width = "25px"
        mouth.style.transform = "rotate(0deg)"
    } else if (e.target.htmlFor === "star3") {
        mouth.style.borderRadius = "0%"
        mouth.style.borderBottom = "3px solid black"
        mouth.style.width = "25px"
        mouth.style.transform = "rotate(0deg)"
    } else if (e.target.htmlFor === "star4") {
        mouth.style.borderRadius = "0%";
        mouth.style.borderBottom = "3px solid black"
        mouth.style.width = "15px"
        mouth.style.transform = "rotate(0deg)"
    } else if (e.target.htmlFor === "star5") {
        mouth.style.borderRadius = "0%";
        mouth.style.borderBottom = "3px solid black"
        mouth.style.width = "10px"
        mouth.style.transform = "rotate(-10deg)"
    }
}

