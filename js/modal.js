import { getListMapMode, getBuySellMode } from './page-states.js';
import { checkContainsClass } from './utils.js';
import { isEscapeKey } from './utils.js';

const tableBody = document.querySelector('.users-list__table-body');
//  const tableRows = tableBody.rows;

const popupForm = document.querySelector('.modal--buy');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    popupClose();
  }
};

const popupOpen = () => {
  popupForm.style.display = null;
  document.addEventListener('keydown', onDocumentKeydown);
};
function popupClose() {
  popupForm.style.display = 'none';
  document.removeEventListener('keydown', onDocumentKeydown);
}
// const trs = tableBody.querySelectorAll('.users-list__table-cell.users-list__table-btn');

const renderModalForm = (form, element) => {
  popupOpen();
  // // eslint-disable-next-line no-console
  // console.log('form', form);

  const userInfo = form.querySelector('.transaction-info');
  const userName = userInfo.querySelector('.transaction-info__data');
  const tableUser = element.querySelector('.users-list__table-name');
  const tableUserName = tableUser.querySelector('span');
  // eslint-disable-next-line no-console
  console.log('tableUserName.textContent', tableUserName.textContent);
  // eslint-disable-next-line no-console
  console.log('userName.textContent', userName.textContent);
  userName.textContent = tableUserName.textContent;
};

const getModalMode = () => {
  if (getListMapMode() === 'MapMode' || getBuySellMode() === 'SellerMode') {
    // eslint-disable-next-line no-console
    console.log('sell');
  } else {
    // eslint-disable-next-line no-console
    console.log('buy');
  }
};

const showEvent = (evt) => {
  // eslint-disable-next-line no-console
  console.log('evt.target.currentTarget>>', evt.currentTarget);
  renderModalForm(popupForm, evt.currentTarget);
};

const onTableClick = () => {
  //  const tableRows = tableBody.rows;
  const trs = Array.from(tableBody.rows);
  trs.forEach((item) => {
    // eslint-disable-next-line no-console
    console.log('checkContainsClass_item-btn', checkContainsClass(item, 'btn'));
    item.addEventListener('click', showEvent);
  });
  // eslint-disable-next-line no-console
  // console.log('tableBody>>', tableBody);
  // eslint-disable-next-line no-console
  // console.log('trs>>', trs);
  // const cell = Array.from(evt.target.parentElement);
  // eslint-disable-next-line no-console
  // console.log('cell>>', cell);
  // if (checkContainsClass(evt.target, 'btn--greenborder'))
  // eslint-disable-next-line no-console

  // eslint-disable-next-line no-console
  // console.log('checkContainsClass____btn--greenborder>>', checkContainsClass(evt.target, 'btn--greenborder'));

  // eslint-disable-next-line no-console
  // console.log('evt.target.parentElement.children>>', evt.target.parentElement.children);
};

const testFunc = () => {
  popupOpen();

  // const bShow = document.querySelectorAll('button');
  // bShow.onclick = function () {
  //   // body...
  //   // eslint-disable-next-line no-alert
  //   alert('Hi');
  // };
  // tableRows.array.forEach((element) => {
  //   element.addEventListener('click', onTableClick);
  // });
  tableBody.addEventListener('click', onTableClick);
  // eslint-disable-next-line no-console
  // console.log('trs>>', trs);
  // eslint-disable-next-line no-console
  // console.log('rows>>', rows);
  // eslint-disable-next-line no-console
  // console.log('buttons>>', buttons);
};
testFunc();

export { getModalMode, testFunc };
