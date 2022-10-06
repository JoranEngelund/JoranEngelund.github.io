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

window.addEventListener("resize", checkScreenSize);

function nextSlide() {
  carouselContainer.scrollBy(width + gap, 0);
}

function prevSlide() {
  carouselContainer.scrollBy(-(width + gap), 0);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
