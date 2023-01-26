const userTableRowTempldate = document
  .querySelector('#user-table-row__template')
  .content.querySelector('.users-list__table-row');
const tableBody = document.querySelector('.users-list__table-body');

const baloonTemplate = document
  .querySelector('#map-baloon__template')
  .content.querySelector('.user-card');
//const mapContainer = document.querySelector('.container--map');

// const cntr = [
//   {
//     id: 'gZvJzs2ZSkDC52OHP6tWl',
//     balance: {
//       currency: 'KEKS',
//       amount: 60.26,
//     },
//     exchangeRate: 6261.62,
//     isVerified: true,
//     status: 'seller',
//     userName: 'Борис',
//     paymentMethods: [
//       {
//         currency: 'RUB',
//         provider: 'QIWI',
//         accountNumber: '0000 0000 0000 1432',
//       },
//       {
//         currency: 'RUB',
//         provider: 'Sberbank',
//         accountNumber: '0000 0000 0000 9410',
//       },
//     ],
//     minAmount: 3,
//   },
//   {
//     id: 'WwYf30_THgxC5qatpLD4k',
//     balance: {
//       currency: 'KEKS',
//       amount: 66.87,
//     },
//     exchangeRate: 2997.45,
//     isVerified: false,
//     status: 'buyer',
//     userName: 'Кирилл',
//     paymentMethods: [
//       {
//         currency: 'RUB',
//         provider: 'Cash in person',
//       },
//       {
//         currency: 'RUB',
//         provider: 'QIWI',
//         accountNumber: '0000 0000 0000 2058',
//       },
//     ],
//     coords: {
//       lat: 59.53565,
//       lng: 29.6658,
//     },
//     minAmount: 1,
//   },
// ];

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
  const noResultSearch = document.querySelector('.container--lightbackground');
  tableBody.innerHTML = '';
  noResultSearch.style.display = null;
};

const ClearPopup = () => {
  //TODO  DElete loyer pins
  //mapContainer.style.display = null;
};

const renderContractors = (listContractors) => {
  tableBody.innerHTML = '';
  if (listContractors.length === 0) {
    ClearList();
  } else {
    listContractors.forEach((element) => {
      const userTableRowFragment = document.createDocumentFragment();
      const userTableRowElem = userTableRowTempldate.cloneNode(true);

      const tableUser = userTableRowElem.querySelector(
        '.users-list__table-name'
      );
      const tableUserName = tableUser.querySelector('span');
      const tableUserStar = tableUser.querySelector('svg');

      const tableCurrency = userTableRowElem.querySelector(
        '.users-list__table-currency'
      );
      const tableExchangeRate = userTableRowElem.querySelector(
        '.users-list__table-exchangerate'
      );
      const tableCashLimit = userTableRowElem.querySelector(
        '.users-list__table-cashlimit'
      );
      const tableBadgesList = userTableRowElem.querySelector(
        '.users-list__badges-list'
      );

      tableBadgesList.innerHTML = '';
      if (element.paymentMethods) {
        for (let i = 0; i < element.paymentMethods.length; i++) {
          const newLi = document.createElement('li');
          newLi.classList.add('users-list__badges-item');
          newLi.classList.add('badge');
          newLi.textContent = element.paymentMethods[i].provider;
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

      userTableRowFragment.appendChild(userTableRowElem);
      tableBody.appendChild(userTableRowFragment);
    });
  }
};
const setTextContentTag = (tag, text) => {
  const data = tag.querySelector('.user-card__cash-data');
  data.textContent(text);
};
const renderPopupContractors = (listContractors) => {
  if (listContractors.length === 0) {
    ClearPopup();
  } else {
    listContractors.forEach((element) => {
      const popupElement = baloonTemplate.cloneNode(true);
      //const userPopupFragment = document.createDocumentFragment();

      const popupUser = popupElement.querySelector('.user-card__user-name');
      const popupUserName = popupUser.querySelector('span');
      const popupUserStar = popupUser.querySelector('svg');
      //TODO  DElete loyer pins

      popupUserName.textContent = element.userName;
      if (!element.isVerified) {
        popupUserStar.remove();
      }

      const popupCashList = popupElement.querySelectorAll(
        '.user-card__cash-item'
      );
      setTextContentTag(
        popupCashList[0].textContent,
        element.balance['currency']
      );
      setTextContentTag(
        popupCashList[0].textContent,
        `${element.exchangeRate} ₽`
      );
      setTextContentTag(popupCashList[0].textContent, getLimit(element));

      const popupBadgesList = popupElement.querySelector(
        '.user-card__badges-list'
      );

      if (element.paymentMethods) {
        for (let i = 0; i < element.paymentMethods.length; i++) {
          const newLi = document.createElement('li');
          newLi.classList.add('users-list__badges-item');
          newLi.classList.add('badge');
          newLi.textContent = element.paymentMethods[i].provider;
          popupBadgesList.appendChild(newLi);
        }
      }

      //userPopupFragment.appendChild(popupElement);
      //tableBody.appendChild(userTableRowFragment);
      return popupElement;
    });
  }
};

export { renderContractors, ClearList, renderPopupContractors, ClearPopup };
