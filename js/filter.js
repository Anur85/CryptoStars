//import { getListMapMode, getBuySellMode } from './page-states.js';
//import { getData } from './api.js';
import { renderContractors } from './render-list-contractors.js';

const checkboxCustom = document.querySelector('#checked-users');

const isVerifiedCustom = () => checkboxCustom.checked;

const filterByVerified = (contractors) => {
  // eslint-disable-next-line no-console
  console.log('contractors>>', contractors);
  const filteredOffers = [];
  for (const contractor of contractors) {
    if (contractor.isVerified === isVerifiedCustom()) {
      filteredOffers.push(contractor);
    }
  }
  // eslint-disable-next-line no-console
  console.log('filteredOffers>>', filteredOffers);
  renderContractors(filteredOffers);
};
checkboxCustom.addEventListener('change', filterByVerified);

//const sortData = (AllData) => {}

// eslint-disable-next-line no-console
//console.log(getListMapMode());

// eslint-disable-next-line no-console
//console.log(getBuySellMode());

// eslint-disable-next-line no-console
//console.log(isVerifiedCustom());
export { filterByVerified };
