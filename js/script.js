const carouselContainer = document.querySelector(".content-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const width = 360;
const gap = 16;

function nextSlide() {
  carouselContainer.scrollBy(width + gap, 0);
}

function prevSlide() {
  carouselContainer.scrollBy(-(width + gap), 0);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
