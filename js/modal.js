import { getListMapMode, getBuySellMode, getModalMode } from './page-states.js';
import { checkContainsClass } from './utils.js';
import { isEscapeKey } from './utils.js';
import { showMessage } from './message.js';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalClose();
  }
};

const onChangeProvider = () => {
  const modalForm = document.querySelector(`.modal-${getModalMode()}`);
  const selectForm = modalForm.querySelector('.modal__select-wrapper').querySelector('select');
  const cardNumber = modalForm.querySelectorAll('.modal__input-wrapper--decorated')[1].querySelector('input');
  cardNumber.placeholder = selectForm.value;
};

const validateForm = (form) => {
  const submitForm = form.querySelector('form');
  // const formModal = document.querySelector(`.modal-${getModalMode()}`);
  // eslint-disable-next-line no-console
  console.log('submitForm', submitForm);
  const pristine = new Pristine(submitForm, {
    classTo: 'custom-input',
    errorClass: 'modal__container--invalid',
    successClass: 'modal__container--valid',
    errorTextParent: 'custom-input',
    errorTextTag: 'div',
    errorTextClass: 'text-help'
  });

  const inputs = form.querySelectorAll('.custom-input');

  const payment = inputs[0].querySelector('input');
  // eslint-disable-next-line no-console
  console.log('payment', payment);
  // eslint-disable-next-line no-console
  // console.log('payment.value', Number(payment.value));

  const validatePayment = () => Number(payment.value) > 0;
  // eslint-disable-next-line no-console
  console.log('validatePayment********', validatePayment());
  pristine.addValidator(payment, validatePayment, 'payment');

  submitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log('payment', payment);
    // eslint-disable-next-line no-console
    console.log('payment.value', Number(payment.value));
    // pristine.validate(adFormPrice);
    const isValid = pristine.validate();

    if (isValid) {
      // eslint-disable-next-line no-console
      console.log('isValid');
      showMessage(form, 'success');
    } else {
      // eslint-disable-next-line no-console
      console.log('!!!isValid');
      showMessage(form, 'error');
    }
  });
};

const modalOpen = () => {
  if (getListMapMode() === 'MapMode') {
    const mapContainer = document.querySelector('.container--map');
    mapContainer.style.display = 'none';
  }
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
  const popupForm = document.querySelector(`.modal--${getModalMode()}`);
  popupForm.style.display = null;
  validateForm(popupForm);
  const selectForm = popupForm.querySelector('.modal__select-wrapper').querySelector('select');
  selectForm.addEventListener('change', onChangeProvider);

  const closePopupBtn = document.querySelectorAll('.modal__close-btn');
  document.addEventListener('keydown', onDocumentKeydown);
  closePopupBtn.forEach((btn) => btn.addEventListener('click', modalClose));
  const modalOverlay = popupForm.querySelector('.modal__overlay');
  modalOverlay.addEventListener('click', modalClose);
};
function modalClose() {
  if (getListMapMode() === 'MapMode') {
    const mapContainer = document.querySelector('.container--map');
    mapContainer.style.display = null;
  }
  document.body.style.position = '';
  document.body.style.top = '';

  const popupForm = document.querySelector(`.modal--${getModalMode()}`);
  popupForm.style.display = 'none';

  const closePopupBtn = document.querySelectorAll('.modal__close-btn');
  closePopupBtn.forEach((btn) => btn.removeEventListener('click', modalClose));
  document.removeEventListener('keydown', onDocumentKeydown);
  const modalOverlay = popupForm.querySelector('.modal__overlay');
  modalOverlay.removeEventListener('click', modalClose);
  const modalForm = popupForm.querySelector(`.modal-${getModalMode()}`);
  modalForm.reset();
}

const renderListModalForm = (form, element) => {
  modalOpen();
  const modalForm = form.querySelector(`.modal-${getModalMode()}`);

  const userName = modalForm.querySelector('.transaction-info__data');
  const exchangeRate = modalForm.querySelector('.transaction-info__item--exchangerate').querySelector('.transaction-info__data');
  const cashLimit = modalForm.querySelector('.transaction-info__item--cashlimit').querySelector('.transaction-info__data');
  const selectForm = modalForm.querySelector('.modal__select-wrapper').querySelector('select');
  const currentOptions = selectForm.options;
  currentOptions.length = 1;
  let inputNumber = 0;
  if (getBuySellMode() === 'BuyerMode') {
    inputNumber = 1;
  }
  const walletNumber = modalForm.querySelectorAll('.modal__input-wrapper--decorated')[`${inputNumber}`].querySelector('input');

  const userWallet = document.querySelector('#wallet');

  const tableUser = element.querySelector('.users-list__table-name');
  const tableUserName = tableUser.querySelector('span');
  const tableExchangeRate = element.querySelector('.users-list__table-exchangerate');
  const tableCashLimit = element.querySelector('.users-list__table-cashlimit');
  const tableBadgesList = element.querySelector('.users-list__badges-list').querySelectorAll('.users-list__badges-item');

  tableBadgesList.forEach((bag) => {
    const opt = document.createElement('option');
    // const span = document.createElement('span');
    //TODO
    opt.textContent = bag.firstChild.textContent;
    opt.value = bag.lastChild.textContent;

    selectForm.add(opt);
  });

  // вставляем
  userName.textContent = tableUserName.textContent;
  exchangeRate.textContent = tableExchangeRate.textContent;
  cashLimit.textContent = tableCashLimit.textContent;
  walletNumber.placeholder = userWallet.textContent;
};

const renderMapModalForm = (form, element) => {
  modalOpen();
  const modalForm = form.querySelector(`.modal-${getModalMode()}`);

  const userName = modalForm.querySelector('.transaction-info__data');
  const exchangeRate = modalForm.querySelector('.transaction-info__item--exchangerate').querySelector('.transaction-info__data');
  const cashLimit = modalForm.querySelector('.transaction-info__item--cashlimit').querySelector('.transaction-info__data');
  const selectForm = modalForm.querySelector('.modal__select-wrapper').querySelector('select');
  const currentOptions = selectForm.options;
  currentOptions.length = 1;

  const walletNumber = modalForm.querySelectorAll('.modal__input-wrapper--decorated')[0].querySelector('input');

  const userWallet = document.querySelector('#wallet');

  const cardUserName = element.querySelector('.user-card__user-name').querySelector('span');

  const popupCashList = element.querySelectorAll('.user-card__cash-item');

  const exchangeRateCard = popupCashList[1].querySelector('.user-card__cash-data');
  const limitCard = popupCashList[2].querySelector('.user-card__cash-data');

  const cardBadgesList = element.querySelector('.user-card__badges-list').querySelectorAll('.users-list__badges-item');
  cardBadgesList.forEach((bag) => {
    const opt = document.createElement('option');
    // const span = document.createElement('span');
    //TODO
    opt.textContent = bag.firstChild.textContent;
    opt.value = bag.lastChild.textContent;

    selectForm.add(opt);
  });

  // вставляем
  userName.textContent = cardUserName.textContent;
  exchangeRate.textContent = exchangeRateCard.textContent;
  cashLimit.textContent = limitCard.textContent;
  walletNumber.placeholder = userWallet.textContent;
};

const showEvent = (evt) => {
  const popupForm = document.querySelector(`.modal--${getModalMode()}`);
  if (checkContainsClass(evt.target, 'btn--greenborder')) {
    renderListModalForm(popupForm, evt.currentTarget); //render modal
    //TODO возможно здесь надо вызвать два разных render
  }
};

export { getModalMode, showEvent, renderListModalForm, renderMapModalForm };
