import { checkContainsClass } from './utils.js';
const modePageToString = {
  Cписок: 'list',
  Карта: 'map',
  Купить: 'buyer',
  Продать: 'seller'
};
const tabListMap = document.querySelector('.tabs--toggle-list-map');
const tabListMapBtns = tabListMap.querySelectorAll('.btn');
const tabBuySell = document.querySelector('.tabs--toggle-buy-sell');
const tabBuySellBtns = tabBuySell.querySelectorAll('.btn');

const getMode = (element) => {
  if (checkContainsClass(element, 'is-active')) {
    return element.textContent;
  }
};

const getActiveMode = (elements) => {
  for (const element of elements) {
    if (getMode(element)) {
      return modePageToString[getMode(element)];
    }
  }
};

const getListMapMode = () => {
  if (getActiveMode(tabListMapBtns) === 'list') {
    return 'listMode';
  } else {
    return 'MapMode';
  }
};
const getBuySellMode = () => {
  if (getActiveMode(tabBuySellBtns) === 'buyer') {
    return 'BuyerMode';
  } else {
    return 'SellerMode';
  }
};
export { getListMapMode, getBuySellMode };
