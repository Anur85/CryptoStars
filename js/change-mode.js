import { loadConractors } from './load-contractots.js';

const tabListMap = document.querySelector('.tabs--toggle-list-map');
const tabListMapBtns = tabListMap.querySelectorAll('.btn');

const tabBuySell = document.querySelector('.tabs--toggle-buy-sell');
const tabBuySellBtns = tabBuySell.querySelectorAll('.btn');

const toggleButtons = (tabs) => {
  tabs.forEach((btn) => btn.classList.toggle('is-active'));
};

const ListMapClick = (evt) => {
  toggleButtons(tabListMapBtns);
  loadConractors();
  // eslint-disable-next-line no-console
  console.log(evt.target);
};

const BuySellClick = (evt) => {
  toggleButtons(tabBuySellBtns);
  loadConractors();
  // eslint-disable-next-line no-console
  console.log(evt.target);
};

const initChangeMode = () => {
  tabListMapBtns.forEach((btn) => btn.addEventListener('click', ListMapClick));
  tabBuySellBtns.forEach((btn) => btn.addEventListener('click', BuySellClick));
};

export { initChangeMode };
