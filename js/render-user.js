const profile = document.querySelector('.user-profile');
const userCryptoBalance = profile.querySelector('#user-crypto-balance');
const userFiatBalance = profile.querySelector('#user-fiat-balance');
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
};

const hiddenUser = () => {
  profile.classList.add('visually-hidden');
};

export { renderUser, hiddenUser };
