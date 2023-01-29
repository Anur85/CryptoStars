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
      if (getListMapMode() === 'listMode') {
        if (contractor.status === isSellerMode()) {
          filteredOffers.push(contractor);
        }
      } else {
        if (contractor.status === 'seller') {
          filteredOffers.push(contractor);
        }
      }
    } else {
      if (getListMapMode() === 'listMode') {
        // listMode
        if (contractor.status === isSellerMode() && contractor.isVerified === true) {
          filteredOffers.push(contractor);
        }
      } else {
        if (contractor.status === 'seller' && contractor.isVerified === true) {
          filteredOffers.push(contractor);
        }
      }
    }
  }

  if (getListMapMode() === 'listMode') {
    renderContractors(filteredOffers);
    //TODO exit render table data
  } else {
    initMap(INIT_COORDS);
    //TODO exit render pins in map
    setPins(filteredOffers);
  }
};

export { filterByVerified };
