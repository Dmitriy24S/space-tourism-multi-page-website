// Nav menu
const navMenu = document.querySelector(".nav__menu-container");
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// Tab list - change showed content on click
const tabs = document.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    // info panel update
    const tabContainer = tab.parentNode;
    const mainContainer = tabContainer.parentNode;
    targetingContent = tab.getAttribute("aria-controls");

    mainContainer.querySelectorAll("article").forEach((article) => {
      article.setAttribute("hidden", true);
    });
    mainContainer.querySelector(`#${targetingContent}`).removeAttribute("hidden");

    // picture panel update
    const pictureContainer = document.querySelector(".left-destination-section");
    const targetImage = tab.getAttribute("data-image");

    pictureContainer.querySelectorAll("picture").forEach((picture) => {
      picture.setAttribute("hidden", true);
    });
    pictureContainer.querySelector(`#${targetImage}`).removeAttribute("hidden");
  });
});
