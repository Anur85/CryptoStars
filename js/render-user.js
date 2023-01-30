const profile = document.querySelector('.user-profile');
const userCryptoBalance = profile.querySelector('#user-crypto-balance');
const userFiatBalance = profile.querySelector('#user-fiat-balance');
const userWallet = document.querySelector('#user-wallet');

const userPaymentMethods = document.querySelector('#user-paymentMethods');

const userName = profile.querySelector('.user-profile__name').querySelector('span');

const getBalanceFromObject = (balances, currency) => {
  let amount = 0;
  if (balances) {
    for (const balance of balances) {
      if (balance.currency === currency) {
        amount = balance.amount;
      }
    }
  }
  return amount;
};

const renderUser = (user) => {
  userName.textContent = user.userName;
  userCryptoBalance.textContent = getBalanceFromObject(user.balances, 'KEKS');
  userFiatBalance.textContent = getBalanceFromObject(user.balances, 'RUB');
  userWallet.textContent = user.wallet.address;
  user.paymentMethods.forEach((pay) => {
    const opt = document.createElement('li');
    const accountNumberSpan = document.createElement('span');
    opt.textContent = pay.provider;
    accountNumberSpan.textContent = pay.accountNumber;
    opt.appendChild(accountNumberSpan);
    opt.classList.add('user-paymentMethods-item');

    userPaymentMethods.appendChild(opt);
  });
};

const hiddenUser = () => {
  profile.style.display = 'none';
};

export { renderUser, hiddenUser };
