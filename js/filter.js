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
    // eslint-disable-next-line no-console
    console.log('isSellerMode()>>>', isSellerMode());
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
  // eslint-disable-next-line no-console
  //console.log('filteredOffers>>', filteredOffers);
  //if (filteredOffers.length < 0) {

  if (getListMapMode() === 'listMode') {
    // eslint-disable-next-line no-console
    console.log('listMode>>', getListMapMode());
    renderContractors(filteredOffers);
  } else {
    initMap(INIT_COORDS);
    setPins(filteredOffers);
  }

  //}

  //initMap(INIT_COORDS);
  //setPins(filteredOffers);

  //TODO загрузку карты продумать наверное здесь
};

//const sortData = (AllData) => {}

// eslint-disable-next-line no-console
//console.log(getListMapMode());

// eslint-disable-next-line no-console
//console.log(getBuySellMode());

// eslint-disable-next-line no-console
//console.log(isVerifiedCustom());
export { filterByVerified };
