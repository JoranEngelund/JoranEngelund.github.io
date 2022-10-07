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

const hamburgerBtn = document.querySelector(".hamburger-button");
const navigation = document.querySelector("ul");

function checkNavigation() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 864) {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "flex";
  }
}

window.addEventListener("resize", checkNavigation);

hamburgerBtn.addEventListener("click", (e) => {
  if (navigation.style.display === "none") {
    navigation.style.display = "flex";
  } else {
    navigation.style.display = "none";
  }
});
