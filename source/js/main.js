import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initTabs} from './init-tabs';
import {initAccordions} from './init-accordion';
import {initCoachesSwiper, initFeedbackSwiper} from './init-swiper';

// window.addEventListener('DOMContentLoaded', () => {
//   window.addEventListener('load', () => {
//     initTabs();
//   });
// });


// const playButton = document.querySelector('.video__play-button');
// const player = document.querySelector('.video__screen');

// let playVideo = () => {
//   player.play();
// };

// playButton.addEventListener('click', playVideo);


// let player;
// let playButton = document.getElementById("playButton");

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '228',
//     width: '364',
//     videoId: '9TZXsZItgdw',
//     events: {
//       onReady: onPlayerReady,
//     },
//   });
// }

// function onPlayerReady(event) {
//   playButton.addEventListener('click', function () {
//     player.playVideo();
//   });
// }


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initTabs();
  initCoachesSwiper();
  initFeedbackSwiper();
  initAccordions();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
