const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});