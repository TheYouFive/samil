const scrollTop = document.querySelector(".scroll-top");

function goToTop() {
  window.scrollTo({
    top: 0,
  });
}

scrollBtn.addEventListener("click", goToTop);
