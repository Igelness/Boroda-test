/* Slick Slider Settings */

$('.features__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  autoplay: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1251,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
      }
    }
  ]
});

/* About Popup */

let aboutDiv = document.querySelector(".header__about").parentElement;
let popup = document.querySelector(".about__popup-wrapper");
let popupDiv = document.querySelector(".about__popup");
let closePopup = document.querySelector(".about__popup-close");

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

  if(e.target.classList.contains(".header__about")) {
    e.preventDefault();
    let popup = document.querySelector(".about__popup-wrapper");
    popup.style.visibility = "visible";
    popup.style.opacity = "0.9";
    popupDiv.style.visibility = "visible";
    popupDiv.style.opacity = "1";
    popupDiv.style.top = "50%";
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

  /* Mobile Menu */

  if(e.target.classList.contains("header__burger")) {
    let btnBurger = document.querySelector(".burger");
    let btnCross = document.querySelector(".btn-cross");

    e.preventDefault();
    let headerMobileMenu = document.querySelector(".header__menu");
    if(headerMobileMenu.style.display === "block") {
      btnCross.style.display = "none";
      btnBurger.parentElement.style.display = "block";
      headerMobileMenu.style.display = "none";
      let mobileMenuFeatures = document.querySelector(".header__menu-features");
      document.querySelector(".header__dropdown").style.display = "none";
      mobileMenuFeatures.style.paddingTop = "0px"
    } else {
      btnBurger.parentElement.style.display = "none";
      btnCross.style.display = "block";
      headerMobileMenu.style.display = "block";
    }
  }

  /* Mobile Dropdown */

  let mobileMenuFeatures = document.querySelector(".header__menu-features");
  let arrowOpen = document.querySelector(".arrow-open");
  let arrowUp = document.querySelector(".arrow-up");
  if(e.target.classList.contains("header__dropdown-li") && window.innerWidth < 995) {
    if (document.querySelector(".header__dropdown").style.display === "none") {
      document.querySelector(".header__dropdown").style.display = "block";
      mobileMenuFeatures.style.paddingTop = "140px";
      arrowOpen.style.display = "none";
      arrowUp.style.display = "block";
    } else if (document.querySelector(".header__dropdown").style.display === "block") {
      mobileMenuFeatures.style.paddingTop = "0px";
      document.querySelector(".header__dropdown").style.display = "none";
      arrowOpen.style.display = "block";
      arrowUp.style.display = "none";
    }
  } else {
    mobileMenuFeatures.style.paddingTop = "0px";
    document.querySelector(".header__dropdown").style.display = "none";
    arrowOpen.style.display = "block";
    arrowUp.style.display = "none";
  }

  if(e.target.classList.contains("header__dropdown-subli") && window.innerWidth < 995 || e.target.classList.contains("header__dropdown-sublink") && window.innerWidth < 995) {
    document.querySelector(".header__dropdown").style.display = "block";
    mobileMenuFeatures.style.paddingTop = "140px";
    arrowOpen.style.display = "none";
    arrowUp.style.display = "block";
  }
});

