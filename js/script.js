var servicesControls = document.querySelector(".services-controls");
servicesControls.classList.remove("visually-hidden");

var slideIndex = 1;
var promoSlide = "promoSlide";
var servicesItem = "servicesItem";

showSlides(slideIndex, promoSlide);
showSlides(slideIndex, servicesItem);

function currentSlide(n, x) {
  showSlides(slideIndex = n, x);
};

function showSlides(n, x) {
  var slides;
  var controls;

  if (x == "promoSlide") {
    slides = document.getElementsByClassName("promo-slide");
    controls = document.getElementsByClassName("promo-slider-control");
  } else {
    slides = document.getElementsByClassName("services-item");
    controls = document.getElementsByClassName("services-control");
  };

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.add("visually-hidden");
    controls[i].classList.remove("active")
  };

  slides[slideIndex - 1].classList.remove("visually-hidden");
  controls[slideIndex - 1].classList.add("active");
};
