import { sendData } from './api.js';
import { showMessageSuccess, showMessageError } from './message.js';

const SEND_URL = 'https://cryptostar.grading.pages.academy/';

// // const popupForm = document.querySelector(`.modal-${getModalMode()}`);
// // const inputs = popupForm.querySelectorAll('.custom-input');

// // const payment = inputs[0].querySelector('input');

// // const validatePayment = () => Number(payment.value) < 0;

const validateForm = (form) => {
  const pristine = new Pristine(form, {
    classTo: 'custom-input',
    errorClass: 'modal__container--invalid',
    successClass: 'modal__container--valid',
    errorTextParent: 'custom-input',
    errorTextTag: 'div',
    errorTextClass: 'text-help'
  });

  const paymentInput = form.querySelector('input[name="payment"]');

  const validatePayment = () => Number(paymentInput.value) > 0;

  pristine.addValidator(paymentInput, validatePayment, 'Минимальная сумма должна быть больше 0');

  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      // eslint-disable-next-line no-console
      console.log('isValid');

      await sendData(SEND_URL, showMessageSuccess, showMessageError, new FormData(form));
    } else {
      // eslint-disable-next-line no-console
      console.log('!!!isValid');
      showMessageError();
    }
  });
};

export { validateForm };
