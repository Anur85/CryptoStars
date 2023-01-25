import { loadConractors } from './load-contractots.js';
import { getListMapMode } from './page-states.js';

const tabListMap = document.querySelector('.tabs--toggle-list-map');
const tabListMapBtns = tabListMap.querySelectorAll('.btn');

const tabBuySell = document.querySelector('.tabs--toggle-buy-sell');
const tabBuySellBtns = tabBuySell.querySelectorAll('.btn');

const toggleButtons = (tabs) => {
  tabs.forEach((btn) => btn.classList.toggle('is-active'));
};

const ListMapClick = () => {
  toggleButtons(tabListMapBtns);
  loadConractors();
  if (getListMapMode() === 'MapMode') {
    tabBuySell.style.display = 'none';
  } else {
    tabBuySell.style.display = null;
  }

  // eslint-disable-next-line no-console
  console.log(getListMapMode());
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
