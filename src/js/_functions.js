// Подключение свайпера gsap micromodal

import MicroModal from 'micromodal';

import { gsap, Power2 } from 'gsap';

import Swiper, { Navigation, Pagination, Parallax, Mousewheel, Controller, Keyboard, Scrollbar } from 'swiper';

Swiper.use([Navigation, Pagination, Parallax, Mousewheel, Controller, Keyboard, Scrollbar]);

// SWIPER

const heroSlider = new Swiper('.hero-slider', {
  speed: 800,
  effect: 'fade',
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: '.hero-slider__pagination',
    type: "custom",
    renderCustom: function(swiper, current, total) {
      let indexTotal = total >= 10 ? total : `0${total}`
      let indexCurrent = current >= 10 ? current : `0${current}`
      return `<b>${indexCurrent}</b><span></span> ${indexTotal}`
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  runCallbacksOnInit: true
});


// Micromodal
MicroModal.init({
  openTrigger: 'data-micromodal-open',
  closeTrigger: 'data-micromodal-close',
  disableFocus: true,
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
})



// Burger active
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');

function toggleMenu() {
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__list--active');
}

burger.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});

function closeMenu() {
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__list--active');
}

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_burger = target == burger;
  let menu_is_active = menu.classList.contains('header__list--active');

  if (!its_menu && !its_burger && menu_is_active) {
    closeMenu();
  }
})



