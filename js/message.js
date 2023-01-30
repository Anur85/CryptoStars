import { getModalMode } from './page-states.js';
import { modalClose } from './modal.js';
const TIME_MESSAGE = 1000;

const showMessageSuccess = () => {
  const form = document.querySelector(`.modal-${getModalMode()}`);
  const showDiv = form.querySelector('.modal__validation-message--success');
  showDiv.style.display = null;
  setTimeout(() => {
    showDiv.style.display = 'none';
    modalClose();
  }, TIME_MESSAGE);
};
const showMessageError = () => {
  const form = document.querySelector(`.modal-${getModalMode()}`);
  const showDiv = form.querySelector('.modal__validation-message--error');
  showDiv.style.display = null;
  setTimeout(() => {
    showDiv.style.display = 'none';
  }, TIME_MESSAGE);
};

export { showMessageSuccess, showMessageError };
