/*-- Carousel Slider --*/

const carouselContainer = document.querySelector(".content-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let width = 360;
const gap = 16;

function checkScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 396) {
    width = 264;
  } else if (screenWidth >= 397) {
    width = 360;
  }
}

/* 
Creds: https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event 
*/

window.addEventListener("resize", checkScreenSize);

function nextSlide() {
  carouselContainer.scrollBy(width + gap, 0);
}

function prevSlide() {
  carouselContainer.scrollBy(-(width + gap), 0);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

/*-- Dropdown Menu --*/

const hamburgerBtn = document.querySelector(".hamburger-button");
const navigation = document.querySelector("ul");

/*
Creds: https://dev.to/js_bits_bill/element-classlist-toggle-js-bits-1c6i
*/

hamburgerBtn.addEventListener("click", function () {
  navigation.classList.toggle("active-menu");
});

/*-- Nav Scroll --*/
/*

Creds: https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62

&

Thanks to Alexander Barret for help

*/
const sections = document.querySelectorAll("section");
const nav = document.querySelectorAll("nav ul li");

window.onscroll = () => {
  let closest = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      closest = section.getAttribute("id");
      console.log(closest);
    }
  });

  nav.forEach(function (li) {
    li.classList.remove("active");
    if (li.childNodes[0].innerText.toLowerCase() === closest) {
      li.classList.add("active");
    }
  });
};
