import { loadListConractors } from './load-contractots.js';
import { getListMapMode } from './page-states.js';

const userTable = document.querySelector('.users-list');
const mapContainer = document.querySelector('.container--map');
const checkboxCustom = document.querySelector('#checked-users');

const tabListMap = document.querySelector('.tabs--toggle-list-map'); // List Map
const tabListMapBtns = tabListMap.querySelectorAll('.btn');

const tabBuySell = document.querySelector('.tabs--toggle-buy-sell'); // Buy Sell
const tabBuySellBtns = tabBuySell.querySelectorAll('.btn');

// change active tabs
const toggleButtons = (tabs) => {
  tabs.forEach((btn) => btn.classList.toggle('is-active'));
};
const toMapMode = () => {
  userTable.style.display = 'none';
  mapContainer.style.display = null;
  tabBuySell.style.display = 'none';
};

const toListMode = () => {
  userTable.style.display = null;
  mapContainer.style.display = 'none';
  tabBuySell.style.display = null;
};

const onCheckboxCustomClick = () => {
  if (getListMapMode() === 'listMode') {
    toListMode();
    loadListConractors();
  } else {
    toMapMode();
    loadListConractors();
    //TODO загрузка карты
  }
};
const onListMapClick = () => {
  toggleButtons(tabListMapBtns); // change active
  // Надо продумать какое событие вызвать.  -- Проверка карта = загрузка карты с пинами
  // Список = загрузка списка
  //loadConractors();
  if (getListMapMode() === 'MapMode') {
    toMapMode();
    loadListConractors();
  } else {
    toListMode();
    loadListConractors();
  }

  // eslint-disable-next-line no-console
  console.log(getListMapMode());
};

const onBuySellClick = (evt) => {
  // eslint-disable-next-line no-console
  console.log(evt);
  toggleButtons(tabBuySellBtns);
  loadListConractors();
};

const initChangeMode = () => {
  tabListMapBtns.forEach((btn) =>
    btn.addEventListener(
      'click',
      onListMapClick
      // eslint-disable-next-line no-console
      //console.log('12')
    )
  );
  tabBuySellBtns.forEach((btn) =>
    btn.addEventListener(
      'click',
      onBuySellClick
      // eslint-disable-next-line no-console
      // console.log('13')
    )
  );
  checkboxCustom.addEventListener('change', onCheckboxCustomClick);
};

export { initChangeMode };
