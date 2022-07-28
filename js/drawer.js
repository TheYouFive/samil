const drawerBox = document.querySelector(".drawer-box");
const drawer = document.querySelector(".drawer");
const drawerContent = document.querySelector(".drawer-content");
const drawerModal = document.querySelector(".drawer-modal");
const drawerNav = document.querySelectorAll(".drawer-nav li");

function scrollDrawer() {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    drawerBox.classList.add("change");
  } else {
    drawerBox.classList.remove("change");
  }
}

function drawerClick() {
  drawer.classList.toggle("show");
  drawerContent.classList.toggle("show");
  drawerModal.classList.toggle("show");
}

function liClick() {
  for (let i = 0; i < drawerNav.length; i++) {
    drawer.classList.remove("show");
    drawerContent.classList.remove("show");
    drawerModal.classList.remove("show");
  }
}

drawer.addEventListener("click", drawerClick);
window.addEventListener("scroll", scrollDrawer);
drawerNav.addEventListener("click", liClick);
