// Select elements
let slideContainer = document.querySelector(".slide__container");
let images = document.querySelectorAll(".slide__container img");
let prevButton = document.querySelector("#prevButton");
let nextButton = document.querySelector("#nextButton");

// Image width for transformation
let imgSize = images[0].clientWidth;

// Counter to keep track of the current image
let counter = 1;
slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;

// Next button event
nextButton.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  counter++;
  slideContainer.style.transition = "transform 0.25s ease-in-out";
  slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
});

// Prev button event
prevButton.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  slideContainer.style.transition = "transform 0.25s ease-in-out";
  slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
});

// Reset the counter if a clone is reached
slideContainer.addEventListener("transitionend", () => {
  if (images[counter].id === "firstClone") {
    slideContainer.style.transition = "none";
    counter = 1;
    slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
  }
  if (images[counter].id === "lastClone") {
    slideContainer.style.transition = "none";
    counter = images.length - 2;
    slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
  }
});

