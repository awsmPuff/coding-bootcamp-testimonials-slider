const intro = document.querySelectorAll(".intro");
const pic = document.querySelectorAll(".pic");
const backward = document.querySelector(".prev");
const forward = document.querySelector(".next");

const prev = () => {
    const currentIntro = document.querySelector(".active-intro");
    currentIntro.classList.remove("active-intro");
    const currentPic = document.querySelector(".active-pic");
    currentPic.classList.remove("active-pic");

    if(currentIntro.previousElementSibling &&
        currentIntro.previousElementSibling.classList.contains("intro")) {
            currentIntro.previousElementSibling.classList.add("active-intro");
            currentPic.previousElementSibling.classList.add("active-pic");
        } else {
            intro[intro.length - 1].classList.add("active-intro");
            pic[pic.length - 1].classList.add("active-pic");
        }
}

const next = () => {
    const currentIntro = document.querySelector(".active-intro");
    currentIntro.classList.remove("active-intro");
    const currentPic = document.querySelector(".active-pic");
    currentPic.classList.remove("active-pic");

    if(currentIntro.nextElementSibling &&
        currentIntro.nextElementSibling.classList.contains("intro")) {
            currentIntro.nextElementSibling.classList.add("active-intro");
            currentPic.nextElementSibling.classList.add("active-pic");
        } else {
            intro[0].classList.add("active-intro");
            pic[0].classList.add("active-pic");
        }
}

backward.addEventListener("click", prev);
forward.addEventListener("click", next);