// /*
// Покупаем (sell mode) Продажа криптовалюты
// загружаем buyer
// Платёжная система - берётся из данных пользователя
// Номер криптокошелька - берётся из user
//  */
// import { getData } from './api.js';

// const modalSell = document.querySelector('.modal--sell');
// const modalSellForm = modalSell.querySelector('.modal-sell'); //форму ,которую будем валидировать
// const userName = modalSellForm.querySelector('.transaction-info__data'); // имя продовца buyer
// const exchangeRate = modalSellForm.querySelector('.transaction-info__item--exchangerate').querySelector('.transaction-info__data'); //курс продовца
// const cashLimit = modalSellForm.querySelector('.transaction-info__item--cashlimit').querySelector('.transaction-info__data'); //9954 ₽ - 6617440 ₽
// const selectForm = modalSellForm.querySelector('.modal__select-wrapper').querySelector('select'); //Выберите платёжную систему

// const parseUser = (user) => {
//   userName.textContent = user.userName;
//   userCryptoBalance.textContent = getBalanceFromObject(user.balances, 'KEKS');
//   userFiatBalance.textContent = getBalanceFromObject(user.balances, 'RUB');
//   userWallet.textContent = user.wallet.address;
// };
