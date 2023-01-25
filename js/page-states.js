import { checkContainsClass } from './utils.js';
const modePageToString = {
  Cписок: 'List',
  Карта: 'Map'
};
const tabListMap = document.querySelector('.tabs--toggle-list-map');
const tabListMapBtns = tabListMap.querySelectorAll('.btn');

const getMode = (element) => {
  if (checkContainsClass(element, 'is-active')) {
    return element.textContent;
  }
};
//let mode = '0';
const getActiveMode = (elements) => {
  for (const element of elements) {
    if (getMode(element)) {
      return modePageToString[getMode(element)];
    }
  }
};

// eslint-disable-next-line no-console
console.log(getActiveMode(tabListMapBtns));
