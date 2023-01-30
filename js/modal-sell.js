/*
Покупаем (sell mode) Продажа криптовалюты
загружаем buyer
Платёжная система - берётся из данных пользователя
Номер криптокошелька - берётся из user
 */

const renderSellModalForm = (element) => {
  const modalSell = document.querySelector('.modal--sell');
  const modalSellForm = modalSell.querySelector('.modal-sell'); //форму ,которую будем валидировать
  const modalUserName = modalSellForm.querySelector('.transaction-info__data'); // имя продавца buyer
  const modalExchangeRate = modalSellForm.querySelector('.transaction-info__item--exchangerate').querySelector('.transaction-info__data'); //курс продовца
  const modalCashLimit = modalSellForm.querySelector('.transaction-info__item--cashlimit').querySelector('.transaction-info__data'); //9954 ₽ - 6617440 ₽

  const modalWalletNumber = modalSell.querySelectorAll('.modal__input-wrapper--decorated')[0].querySelector('input'); //Номер криптокошелька пользователя

  const modalInputContractorId = modalSell.querySelector('input[name="contractorId"]'); //
  const modalInputExchangeRate = modalSell.querySelector('input[name="exchangeRate"]'); //
  const modalInputSendingCurrency = modalSell.querySelector('input[name="sendingCurrency"]'); //
  const modalInputReceivingCurrency = modalSell.querySelector('input[name="receivingCurrency"]'); //

  const selectForm = modalSellForm.querySelector('.modal__select-wrapper').querySelector('select');
  const currentOptions = selectForm.options;
  currentOptions.length = 3;

  const tableUser = element.querySelector('.users-list__table-name');
  const tableUserName = tableUser.querySelector('span');
  const tableExchangeRate = element.querySelector('.users-list__table-exchangerate');
  const tableCashLimit = element.querySelector('.users-list__table-cashlimit');
  const tableContractorId = element.querySelector('.users-list__table-contractor-id');
  const tableWalletAddress = element.querySelector('.users-list__table-wallet-address');

  const userPaymentMethods = document.querySelectorAll('.user-paymentMethods-item');

  userPaymentMethods.forEach((bag) => {
    const select = modalSellForm.querySelector('.modal__select-wrapper').querySelector('select');
    const opt = document.createElement('option');
    opt.textContent = bag.firstChild.textContent;
    opt.value = bag.lastChild.textContent;

    //TODO вот что он не добавляет, ведь на другой модаке все норм
    select.add(opt);
  });

  modalUserName.textContent = tableUserName.textContent;
  modalExchangeRate.textContent = tableExchangeRate.textContent;
  modalCashLimit.textContent = tableCashLimit.textContent;

  modalWalletNumber.placeholder = tableWalletAddress.textContent;
  modalWalletNumber.textContent = tableWalletAddress.textContent;

  modalInputContractorId.value = tableContractorId.textContent;
  modalInputExchangeRate.value = tableExchangeRate.textContent;
  modalInputSendingCurrency.value = 'KEKS'; // При покупке наоборот
  modalInputReceivingCurrency.value = 'RUB'; // При покупке наоборот
};

export { renderSellModalForm };
