import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
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

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
