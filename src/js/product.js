// slider
// select UI elemtns
const sliderContainerImges = document.querySelectorAll(".slide");
const innerSlider = document.querySelector(".innerSlider");
const innerSliderOverlay = document.querySelector(".innerSliderOverLay");
const closeInnerSlider = document.querySelector(".closeInnerSlider");
const innerSlderImages = document.querySelectorAll(".inner-image");
const innerSliderContainerImage = document.querySelector(".container-image");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".tabs");
const tabsContent = document.querySelectorAll(".operations__content");
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn-left");
  const btnRight = document.querySelector(".slider__btn-right");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`),
    );
    // setInterval(() => {
    //   goToSlide(1);
    // }, 4000);
  };

  // Next slide
  const nextSlide = function () {
    clearInterval();
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  setInterval(() => {
    nextSlide();
  }, 3000);
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();
// inner Slider
sliderContainerImges.forEach((sliderContainer) =>
  sliderContainer.addEventListener("click", (e) => {
    console.log(123);

    innerSlider.style.display = "grid";
    innerSliderOverlay.style.display = "grid";
  }),
);

innerSliderOverlay.addEventListener("click", () => {
  innerSlider.style.display = "none";
  innerSliderOverlay.style.display = "none";
});
closeInnerSlider.addEventListener("click", () => {
  console.log(1);
  innerSlider.style.display = "none";
  innerSliderOverlay.style.display = "none";
});
innerSlderImages.forEach((img) =>
  img.addEventListener("click", () => {
    innerSliderContainerImage.src = `${img.getAttribute("src")}`;
  }),
);
// tabbed component for oponions and informaation o product
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
