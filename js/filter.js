import { checkContainsClass } from './utils.js';

const tabBuySell = document.querySelector('.tabs--toggle-buy-sell');
const tabBuySellBtns = tabBuySell.querySelectorAll('.btn');

const cb = () => {
  const elements = tabBuySellBtns;

  for (const element of elements) {
    // eslint-disable-next-line no-console
    console.log('checkContainsClass>>', checkContainsClass(element, 'is-active'));
    checkContainsClass(element, 'is-active');
  }
};
cb();
