const navLinks = document.querySelector(".nav-link");
const subNavLinks = document.querySelector(".sub-nav-link");

const smallSubNavLinkLayer = document.querySelector(".small-nav-link-layer");
const smallSubNavLink = document.querySelector(".small-sub-nav-link");
const smallNavLink = document.querySelector(".small-nav-link");

function onSmallNavLinkClick(e) {
  smallSubNavLinkLayer.classList.toggle("opacity-100");
  smallNavLink.classList.toggle("w-screen");
  smallNavLink.classList.toggle("right-0");
  smallSubNavLink.classList.toggle("right-0");
  smallSubNavLink.classList.toggle("right-[-500px]");
  document.querySelector("body").classList.toggle("fixed");
}

function onNavItemOver(e) {
  navLinks.classList.add("h-dvh");
}
function onNavItemLeave(e) {
  navLinks.classList.remove("h-dvh");
}
subNavLinks.addEventListener("mouseover", onNavItemOver);
subNavLinks.addEventListener("mouseleave", onNavItemLeave);
