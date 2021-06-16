// SHOW HEADER MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN WE CLICK NAV-LINK
const navLink = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");
function linkAction() {
  // nav-link active
  navLink.forEach((e) => e.classList.remove("active-link"));
  this.classList.add("active-link");

  // remove header menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// ADD SHADOW HEADER WHEN WE SCROLL
const scrollY = window.pageYOffset;
function scrollActive() {
  const header = document.getElementById("header");

  this.scrollY >= 100
    ? header.classList.add("scroll-active")
    : header.classList.remove("scroll-active");
}
window.addEventListener("scroll", scrollActive);
