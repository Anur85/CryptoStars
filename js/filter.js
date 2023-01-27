import { getListMapMode, getBuySellMode } from './page-states.js';
import { renderContractors } from './render-list-contractors.js';

import { setPins, initMap } from './map.js';

const INIT_COORDS = {
  lat: 59.92749,
  lng: 30.31127
};
const checkboxCustom = document.querySelector('#checked-users');

const isVerifiedCustom = () => checkboxCustom.checked;
const isSellerMode = () => {
  if (getBuySellMode() === 'SellerMode' || getListMapMode() === 'MapMode') {
    return 'seller';
  } else {
    return 'buyer';
  }
};

const filterByVerified = (contractors) => {
  const filteredOffers = [];
  for (const contractor of contractors) {
    if (!isVerifiedCustom()) {
      if (contractor.status === isSellerMode()) {
        filteredOffers.push(contractor);
      }
    } else {
      if (contractor.isVerified === true && contractor.status === isSellerMode()) {
        filteredOffers.push(contractor);
      }
    }
  }

  if (getListMapMode() === 'listMode') {
    renderContractors(filteredOffers);
  } else {
    initMap(INIT_COORDS);
    setPins(filteredOffers);
  }
};

export { filterByVerified };
