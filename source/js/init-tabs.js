import {Tabs} from './tabs';

// const memebership = document.querySelector('.membership');

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;

};

export {initTabs, tabs};
