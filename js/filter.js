import { getListMapMode, getBuySellMode } from './page-states.js';

import { renderContractors } from './render-list-contractors.js';

const checkboxCustom = document.querySelector('#checked-users');

const isVerifiedCustom = () => checkboxCustom.checked;
const isSellerMode = () => {
  if (getBuySellMode() === 'SellerMode' && getListMapMode() === 'MapMode') {
    return 'seller';
  } else {
    return 'buyer';
  }
};

const filterByVerified = (contractors) => {
  const filteredOffers = [];
  for (const contractor of contractors) {
    // eslint-disable-next-line no-console
    console.log(
      '<<contractor.isVerified === isVerifiedCustom() && contractor.status === isSellerMode()>>>>',
      contractor.isVerified === isVerifiedCustom() && contractor.status === isSellerMode()
    );
    if (contractor.isVerified === isVerifiedCustom() && contractor.status === isSellerMode()) {
      filteredOffers.push(contractor);
    }
  }
  // eslint-disable-next-line no-console
  //console.log('filteredOffers>>', filteredOffers);
  renderContractors(filteredOffers);
};

//const sortData = (AllData) => {}

// eslint-disable-next-line no-console
//console.log(getListMapMode());

// eslint-disable-next-line no-console
//console.log(getBuySellMode());

// eslint-disable-next-line no-console
//console.log(isVerifiedCustom());
export { filterByVerified };
