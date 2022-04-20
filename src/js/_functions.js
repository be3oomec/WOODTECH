// Реализация табов
import GraphTabs from 'graph-tabs';

// Подключение свайпера gsap micromodal
import MicroModal from 'micromodal';
import {
  gsap,
  Power2
} from 'gsap';
import Swiper, {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
  Controller,
  Keyboard,
  Scrollbar
} from 'swiper';

Swiper.use([Navigation, Pagination, Parallax, Mousewheel, Controller, Keyboard, Scrollbar]);


// hero slider
const heroSlider = new Swiper('.hero-slider', {
  speed: 800,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: '.hero-slider__pagination',
    type: "custom",
    renderCustom: function (swiper, current, total) {
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

// const modalBtnOpen = document.querySelector('[data-micromodal-open]'),
//       modalBtnClose = document.querySelector('[data-micromodal-close]'),
//       modalName = document.querySelector('.modal [name=form]');

// modalBtnOpen.addEventListener('click', () => {
//   modalName.value(e.target.dataset('form'))
// });
// modalBtnClose.addEventListener('click', () => {
//   modalName.value(e.target.dataset(''))
// });


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

// Callback list number - TRUST block -
// const numbers = document.querySelectorAll('.trust__item');

// numbers.forEach(el => {
//   el.innerHTML.replace(/\D/g, '<span>$1</span>');
// });


// slider advantages
const advSlide = new Swiper('.advantages__slider', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1400,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
})


// slider blog
const blogSlide = new Swiper('.blog__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.blog__pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
    },
  },
});


// ТАБЫ about page
const tabs = new GraphTabs('about');
