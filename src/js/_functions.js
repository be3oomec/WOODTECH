// Подключение свайпера gsap micromodal
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
  Scrollbar
} from 'swiper';

import MicroModal from 'micromodal';


// SWIPER
Swiper.use([Navigation, Pagination, Parallax, Mousewheel, Controller, Scrollbar]);

const swiperImg = new Swiper(el, {});

const swiperText = new Swiper('.slider-text', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
});

// swiperImg.controller.control = swiperText;
// swiperText.controller.control = swiperImg;



// Micromodal
MicroModal.init({
  openTrigger: 'data-micromodal-open',
  closeTrigger: 'data-micromodal-close',
  disableFocus: true,
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
})
