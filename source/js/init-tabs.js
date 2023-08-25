import {Tabs} from './tabs';

const memebership = document.querySelector('.membership');

let tabs;

const initTabs = () => {

  if (memebership.querySelectorAll('.tabs__element').length === memebership.querySelectorAll('.tabs__control').length) {
    tabs = new Tabs();
    // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
    window.tabs = tabs;
  }
};

export {initTabs, tabs};
