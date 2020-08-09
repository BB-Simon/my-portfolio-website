// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const lineBtn = document.querySelectorAll(".btn-line");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}

// Go To Top Arrow
let jsTop = document.querySelector(".js-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    jsTop.classList.add("active");
  } else {
    jsTop.classList.remove("active");
  }
});

// Typed js
var typed = new Typed(".hi", {
  strings: ["Hi...!"],
  typeSpeed: 80,
  loop: true,
  loopCount: 1,
  showCursor: false,
  startDelay: 1,
});
var typed = new Typed(".type", {
  strings: ["I'm Simon_"],
  typeSpeed: 60,
  loop: true,
  loopCount: 1,
  startDelay: 2,
  showCursor: false,
});
