import { getListMapMode, getBuySellMode } from './page-states.js';
import { renderContractors } from './render-list-contractors.js';
import { setPins, initMap } from './map.js';

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
    // console.log('=====================================');
    // eslint-disable-next-line no-console
    // console.log('<<<<<<contractor>>>>>>>>', contractor);
    // eslint-disable-next-line no-console
    // console.log('contractor.isVerified>>', contractor.isVerified);
    // eslint-disable-next-line no-console
    // console.log('isVerifiedCustom>>', isVerifiedCustom());
    // eslint-disable-next-line no-console
    // console.log('contractor.status>>', contractor.status);
    // eslint-disable-next-line no-console
    // console.log('iisSellerMode>>', isSellerMode());
    // eslint-disable-next-line no-console
    // console.log('IF>>', contractor.isVerified === isVerifiedCustom() && contractor.status === isSellerMode());

    // eslint-disable-next-line no-console
    //console.log('*************************************');

    if (!isVerifiedCustom()) {
      if (contractor.status === isSellerMode()) {
        filteredOffers.push(contractor);
      }
    } else {
      if (
        contractor.isVerified === true &&
        contractor.status === isSellerMode()
      ) {
        filteredOffers.push(contractor);
      }
    }

    // if (
    //   if (isVerifiedCustom()) {
    //   contractor.isVerified === isVerifiedCustom()
    // } &&
    //   contractor.status === isSellerMode()
    // ) {
    //   filteredOffers.push(contractor);
    // }
  }
  // eslint-disable-next-line no-console
  //console.log('filteredOffers>>', filteredOffers);
  if (filteredOffers.length < 0) {
    renderContractors(filteredOffers);
  }

  initMap();
  setPins(filteredOffers);

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
