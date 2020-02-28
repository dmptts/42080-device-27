var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("promo-slide");
  var controls = document.getElementsByClassName("promo-slider-control")

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("visually-hidden");
    controls[i].classList.remove("promo-slider-control-active")
  };

  slides[slideIndex - 1].classList.remove("visually-hidden");
  controls[slideIndex - 1].classList.add("promo-slider-control-active");
}
