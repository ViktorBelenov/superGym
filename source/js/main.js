import {iosVhFix} from './utils/ios-vh-fix';
import {initTabs} from './init-tabs';
import {initAccordions} from './init-accordion';
import {initCoachesSwiper, initFeedbackSwiper} from './init-swiper';
import './init-video';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  initTabs();
  initCoachesSwiper();
  initFeedbackSwiper();
  initAccordions();
});
