/* Slick Slider Settings */

$('.features__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  autoplay: false
});

/* About Popup */

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

  /* Slider Popups */

  if(e.target.classList.contains("link-activate")) {
    e.preventDefault();
    let hiddenInfo = e.target.parentElement.parentElement;
    let hiddenBlock = hiddenInfo.querySelector(".features__slider-item-hidden");
    if (hiddenBlock.classList.contains("new")) {
      let hiddenBlockNew = hiddenBlock.querySelector(".hidden-new");
      hiddenBlockNew.style.opacity = "1";
      hiddenBlockNew.style.visibility = "visible";

      let hiddenBlockImage = hiddenBlock.querySelector(".hidden-img").getElementsByTagName("img");
      hiddenBlockImage[0].src = "images/hidden-new.png";
      hiddenBlockImage[0].style.top = "0";

    }
    hiddenBlock.style.opacity = "1";
    hiddenBlock.style.visibility = "visible";
  }
  if(e.target.classList.contains("link-disable")) {
    e.preventDefault();
    let hiddenBlock = e.target.parentElement.parentElement;

    hiddenBlock.parentElement.style.opacity = "0";
    hiddenBlock.parentElement.style.visibility = "hidden";
  }
});

