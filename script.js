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
    // active tab style and aria
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.setAttribute("aria-current", "none");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-current", "location");

    // info content panel update
    const tabContainer = tab.parentNode;
    const mainContainer = tabContainer.parentNode;
    const targetContent = tab.getAttribute("aria-controls");
    console.log(mainContainer);
    hideContent(mainContainer, "article");
    showContent(mainContainer, `#${targetContent}`);

    // picture panel update
    const pictureContainer = document.querySelector(".picture-container");
    const targetImage = tab.getAttribute("data-image");

    hideContent(pictureContainer, "picture");
    showContent(pictureContainer, `#${targetImage}`);
  });
});

const hideContent = (parent, content) => {
  parent.querySelectorAll(content).forEach((item) => {
    item.setAttribute("hidden", true);
  });
};

const showContent = (parent, content) => {
  parent.querySelector(content).removeAttribute("hidden");
};
