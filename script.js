const navIcon = document.querySelectorAll(".nav__menu--icon");
const navMenu = document.querySelector(".nav__menu-container");

[...navIcon].map((icon) => {
  icon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
