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

var feedbackBtn = document.querySelector(".feedback-btn");
var map = document.querySelector(".map");
var mapOverlay = document.querySelector(".map-overlay");
var modalFeedbackCloseBtn = document.querySelector(".modal-feedback-btn-close");
var modalMapCloseBtn = document.querySelector(".modal-map-btn-close");
var modalFeedback = document.querySelector(".modal-feedback");
var modalMap = document.querySelector(".modal-map");
var modalOverlay = document.querySelector(".modal-overlay");

feedbackBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  modalOverlay.classList.add("modal-show");
});

mapOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
  modalOverlay.classList.add("modal-show");
});

modalOverlay.addEventListener("click", function (evt) {
  modalOverlay.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-show");
  modalMap.classList.remove("modal-show");
});

modalFeedbackCloseBtn.addEventListener("click", function (evt) {
  modalOverlay.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-show");
});

modalMapCloseBtn.addEventListener("click", function (evt) {
  modalOverlay.classList.remove("modal-show");
  modalMap.classList.remove("modal-show");
});


