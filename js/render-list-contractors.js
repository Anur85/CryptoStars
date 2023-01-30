import { markerGroup } from './map.js';
import { getListMapMode } from './page-states.js';
import { showEvent } from './modal.js';

const userTableRowTempldate = document.querySelector('#user-table-row__template').content.querySelector('.users-list__table-row');
const tableBody = document.querySelector('.users-list__table-body');

const baloonTemplate = document.querySelector('#map-baloon__template').content.querySelector('.user-card');
const noResultSearch = document.querySelector('.container--lightbackground');

const getLimit = (user) => {
  const min = user.minAmount;
  let max = min;
  if (user.status === 'buyer') {
    max = user.balance.amount;
  }
  if (user.status === 'seller') {
    max = (Number(user.balance.amount) * Number(user.exchangeRate)).toFixed(2);
  }
  return `${min} ₽ - ${max} ₽`;
};

const ClearList = () => {
  if (getListMapMode() === 'listMode') {
    tableBody.innerHTML = '';
    noResultSearch.style.display = null;
  } else {
    markerGroup.clearLayers();
  }
};

const onTableClick = () => {
  const tableRows = Array.from(tableBody.rows);
  for (const tableRow of tableRows) {
    tableRow.addEventListener('click', showEvent);
  }
};
const setTextContentTag = (tag, text) => {
  const data = tag.querySelector('.user-card__cash-data');
  data.textContent = text;
};

const renderContractors = (listContractors) => {
  tableBody.innerHTML = '';

  if (listContractors.length === 0) {
    ClearList();
  } else {
    listContractors.forEach((element) => {
      const userTableRowFragment = document.createDocumentFragment();
      const userTableRowElem = userTableRowTempldate.cloneNode(true);

      const tableUser = userTableRowElem.querySelector('.users-list__table-name');
      const tableUserName = tableUser.querySelector('span');
      const tableUserStar = tableUser.querySelector('svg');

      const tableCurrency = userTableRowElem.querySelector('.users-list__table-currency');
      const tableExchangeRate = userTableRowElem.querySelector('.users-list__table-exchangerate');
      const tableCashLimit = userTableRowElem.querySelector('.users-list__table-cashlimit');
      //TODO contractorId here????
      const tableContractorId = userTableRowElem.querySelector('.users-list__table-contractor-id');
      const tableBadgesList = userTableRowElem.querySelector('.users-list__badges-list');

      tableBadgesList.innerHTML = '';
      if (element.paymentMethods) {
        for (let i = 0; i < element.paymentMethods.length; i++) {
          const newLi = document.createElement('li');
          const accountNumberSpan = document.createElement('span');
          newLi.classList.add('users-list__badges-item');
          accountNumberSpan.classList.add('account-number');

          accountNumberSpan.style.display = 'none';
          newLi.classList.add('badge');
          newLi.textContent = element.paymentMethods[i].provider;
          accountNumberSpan.textContent = element.paymentMethods[i].accountNumber;
          newLi.appendChild(accountNumberSpan);
          tableBadgesList.appendChild(newLi);
        }
      }

      tableUserName.textContent = element.userName;
      if (!element.isVerified) {
        tableUserStar.remove();
      }
      tableCurrency.textContent = element.balance['currency'];
      tableExchangeRate.textContent = `${element.exchangeRate} ₽`;
      tableCashLimit.textContent = getLimit(element);
      tableContractorId.textContent = element.id;

      userTableRowFragment.appendChild(userTableRowElem);
      tableBody.appendChild(userTableRowFragment);
    });
    onTableClick();
  }
};

const renderPopupContractors = (listContractors) => {
  if (listContractors.coords) {
    const popupElement = baloonTemplate.cloneNode(true);

    const popupUser = popupElement.querySelector('.user-card__user-name');
    const popupUserName = popupUser.querySelector('span');
    const popupUserStar = popupUser.querySelector('svg');

    popupUserName.textContent = listContractors.userName;
    if (!listContractors.isVerified) {
      popupUserStar.remove();
    }

    const popupCashList = popupElement.querySelectorAll('.user-card__cash-item');
    setTextContentTag(popupCashList[0], listContractors.balance['currency']);
    setTextContentTag(popupCashList[1], `${listContractors.exchangeRate} ₽`);
    setTextContentTag(popupCashList[2], getLimit(listContractors));

    const popupuserContractorId = popupElement.querySelector('#user-card__cash-contractor-id');
    popupuserContractorId.textContent = listContractors.id;
    //TODO веше добавил contractor-id
    const popupBadgesList = popupElement.querySelector('.user-card__badges-list');

    if (listContractors.paymentMethods) {
      for (let i = 0; i < listContractors.paymentMethods.length; i++) {
        const newLi = document.createElement('li');
        const accountNumberSpan = document.createElement('span');
        newLi.classList.add('users-list__badges-item');
        accountNumberSpan.classList.add('account-number');
        //TODO add account-number here
        accountNumberSpan.style.display = 'none';
        newLi.classList.add('badge');
        newLi.textContent = listContractors.paymentMethods[i].provider;
        accountNumberSpan.textContent = listContractors.paymentMethods[i].accountNumber;
        newLi.appendChild(accountNumberSpan);
        popupBadgesList.appendChild(newLi);
      }
    }
    return popupElement;
  }
};

export { renderContractors, ClearList, renderPopupContractors };
