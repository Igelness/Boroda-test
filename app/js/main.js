$('.features__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  autoplay: false
});

const aboutDiv = document.querySelector(".header__about");
const popup = document.querySelector(".about__popup-wrapper");
const popupDiv = document.querySelector(".about__popup");
const closePopup = document.querySelector(".about__popup-close");

aboutDiv.addEventListener('click', () => {
  popup.style.visibility = "visible";
  popup.style.opacity = "0.9";
  popupDiv.style.visibility = "visible";
  popupDiv.style.opacity = "1";
  popupDiv.style.top = "50%";
});

document.addEventListener('click', (e) => {
  if (e.target === popup || e.target === closePopup) {
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
    popupDiv.style.opacity = 0;
    popupDiv.style.visibility = "hidden";
    popupDiv.style.top = "55%";
  }
});

