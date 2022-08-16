const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const off = document.querySelector("#off");

// open menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  off.classList.toggle("hidden");
});
// close menu
off.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  off.classList.toggle("hidden");
});
