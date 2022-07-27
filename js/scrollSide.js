const scrollBtn = document.querySelector(".scroll-top");
const talkBtn = document.querySelector(".talktalk");

function scrollShowHide() {
  let scrollY = window.scrollY;
  if (scrollY > 100) {
    scrollBtn.classList.add("show");
    talkBtn.classList.add("up");
  } else {
    scrollBtn.classList.remove("show");
    talkBtn.classList.remove("up");
  }
}

window.addEventListener("scroll", scrollShowHide);
