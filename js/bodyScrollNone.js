const drawerBtn = document.querySelector(".drawer");
const body = document.querySelector(".body");

function ScrollNone() {
  body.classList.toggle("none");
}

drawerBtn.addEventListener("click", ScrollNone);
