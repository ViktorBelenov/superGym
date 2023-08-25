import {iosVhFix} from './utils/ios-vh-fix';
import {initTabs} from './init-tabs';
import {initAccordions} from './init-accordion';
import {initCoachesSwiper, initFeedbackSwiper} from './init-swiper';
import {Form} from './modules/form-validate/form';
import './init-video';

const input = document.querySelector('#name');

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  initTabs();
  initCoachesSwiper();
  initFeedbackSwiper();
  initAccordions();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    window.form.validateFormElement(input, true);
  });
});
