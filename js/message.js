// import { getModalMode } from './page-states.js';
const TIME_MESSAGE = 1000;
// const form = document.querySelector(`.modal-${getModalMode()}`);

// const successDiv = document.querySelector('.modal__validation-message--error');
// const successDiv = document.querySelector('.modal__validation-message--success');

// status : error/success
// const

const showMessage = (form, status) => {
  const showDiv = form.querySelector(`.modal__validation-message--${status}`);
  showDiv.style.display = null;
  setTimeout(() => {
    showDiv.style.display = 'none';
  }, TIME_MESSAGE);
};

export { showMessage };
