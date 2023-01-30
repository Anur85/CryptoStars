import { checkContainsClass } from './utils.js';
const modePageToString = {
  Cписок: 'list',
  Карта: 'map',
  Купить: 'buy', //'seller',
  Продать: 'sell' //'buyer'
};
const tabListMap = document.querySelector('.tabs--toggle-list-map');
const tabListMapBtns = tabListMap.querySelectorAll('.btn');
const tabBuySell = document.querySelector('.tabs--toggle-buy-sell');
const tabBuySellBtns = tabBuySell.querySelectorAll('.btn');

const getMode = (element) => {
  if (checkContainsClass(element, 'is-active')) {
    return element.textContent.trim();
  }
};

const getActiveMode = (elements) => {
  for (const element of elements) {
    if (getMode(element)) {
      return modePageToString[getMode(element)];
    }
  }
};
//переключение таба список/карта
const getListMapMode = () => {
  if (getActiveMode(tabListMapBtns) === 'list') {
    return 'listMode';
  } else {
    return 'MapMode';
  }
};
//переключение таба купаить/продать
const getBuySellMode = () => {
  if (getActiveMode(tabBuySellBtns) === 'sell') {
    // was buyer
    return 'BuyerMode';
  } else {
    return 'SellerMode';
  }
};
//определение какое модальное окно открыть
const getModalMode = () => {
  if (getListMapMode() === 'MapMode' || getBuySellMode() === 'BuyerMode') {
    // modal--sell
    //SellerMode
    return 'sell';
  } // modal--buy
  else {
    return 'buy';
  }
};
export { getListMapMode, getBuySellMode, getModalMode };
