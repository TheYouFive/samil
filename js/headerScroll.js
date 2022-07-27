const header = document.querySelector(".header");

function headerScroll() {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    header.classList.add("change");
  } else {
    header.classList.remove("change");
  }
}

window.addEventListener("scroll", headerScroll);
