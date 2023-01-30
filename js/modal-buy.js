// /*
// Продаем (sell mode) Покупка криптовалюты
// загружаем seller
// Поле Платёжная система — это выпадающий список. Информация для заполнения поля берётся из данных продавца.
// Номер криптокошелька - берётся из user
//  */

// const modalBuy = document.querySelector('.modal--buy');
// const modalBuyForm = modalBuy.querySelector('.modal-buy'); //форму ,которую будем валидировать

// const modalUserName = modalBuyForm.querySelector('.transaction-info__data'); // имя продавца buyer
// const modalExchangeRate = modalBuyForm.querySelector('.transaction-info__item--exchangerate').querySelector('.transaction-info__data'); //курс продовца
// const modalCashLimit = modalBuyForm.querySelector('.transaction-info__item--cashlimit').querySelector('.transaction-info__data'); //9954 ₽ - 6617440 ₽
// const modalSelectForm = modalBuyForm.querySelector('.modal__select-wrapper').querySelector('select'); //Выберите платёжную систему
// const currentOptions = modalBuyForm.options;
// currentOptions.length = 1; //clean options
// const modalWalletNumber = modalBuy.querySelectorAll('.modal__input-wrapper--decorated')[1].querySelector('input'); //Номер криптокошелька пользователя
// const modalInputContractorId = modalBuy.querySelector('input[name="contractorId"]');
// const modalInputExchangeRate = modalBuy.querySelector('input[name="exchangeRate"]');
// const modalInputSendingCurrency = modalBuy.querySelector('input[name="sendingCurrency"]');
// const modalInputReceivingCurrency = modalBuy.querySelector('input[name="receivingCurrency"]');

// const userWallet = document.querySelector('#user-wallet'); //криптокошелёк пользователя

// const renderBuyModalForm = (element) => {
//   modalWalletNumber.textContent = userWallet.textContent; //Номер криптокошелька пользователя
// };
