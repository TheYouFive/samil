const drawerBox = document.querySelector(".drawer-box");
const drawer = document.querySelector(".drawer");
const drawerContent = document.querySelector(".drawer-content");
const drawerModal = document.querySelector(".drawer-modal");

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

drawer.addEventListener("click", drawerClick);
window.addEventListener("scroll", scrollDrawer);
