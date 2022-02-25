/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll header class to the header tag
  if (this.scrollY > 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((item) => {
  item.addEventListener("click", () => {
    modalViews.forEach((itemClose) => {
      itemClose.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
const mixerPortforlio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((link) => link.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((link) => link.addEventListener("click", activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT THEME ===============*/
const themButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? "dark" : "light");
const getCurrentIcon = () => (document.body.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun");

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme);
  document.body.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](lightTheme);
}

themButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themButton.classList.toggle(iconTheme);

  localStorage.getItem("selected-theme", getCurrentTheme());
  localStorage.getItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social .home__scroll`, { delay: 900, origin: "bottom" });
