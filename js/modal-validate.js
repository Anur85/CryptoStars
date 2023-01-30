import { showMessage } from './message.js';
// import { getModalMode } from './page-states.js';

// // const popupForm = document.querySelector(`.modal-${getModalMode()}`);
// // const inputs = popupForm.querySelectorAll('.custom-input');

// // const payment = inputs[0].querySelector('input');

// // const validatePayment = () => Number(payment.value) < 0;

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
  // TODO красным подчеркнуть поле ввода?
  const inputs = form.querySelectorAll('.custom-input');

  const payment = inputs[0].querySelector('input');
  // eslint-disable-next-line no-console
  console.log('payment', payment);
  // eslint-disable-next-line no-console
  // console.log('payment.value', Number(payment.value));

  const validatePayment = () => Number(payment.value) > 0;
  // eslint-disable-next-line no-console
  console.log('validatePayment********', validatePayment());
  pristine.addValidator(payment, validatePayment, 'Минимальная сумма должна быть больше 0');

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

// const validateForm = (form) => {
//   const pristine = new Pristine(form, {
//     classTo: `.modal-${getModalMode()}`,
//     errorClass: `.modal-${getModalMode()}--invalid`,
//     successClass: `.modal-${getModalMode()}--valid`,
//     errorTextParent: `.modal-${getModalMode()}`,
//     errorTextTag: 'span',
//     errorTextClass: 'text-help'
//   });

//   const inputs = form.querySelectorAll('.custom-input');

//   const payment = inputs[0].querySelector('input');
//   // const formModal = document.querySelector(`.modal-${getModalMode()}`);
//   // eslint-disable-next-line no-console
//   console.log('form', form);

//   // eslint-disable-next-line no-console
//   // console.log('payment', payment);
//   // eslint-disable-next-line no-console
//   console.log('payment.value', Number(payment.value));

//   const validatePayment = () => Number(payment.value) > 0;
//   // eslint-disable-next-line no-console
//   console.log('validatePayment******', validatePayment());

//   pristine.addValidator(form, validatePayment);

//   form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     // eslint-disable-next-line no-console
//     console.log('payment', payment);
//     // eslint-disable-next-line no-console
//     console.log('payment.value', Number(payment.value));
//     // pristine.validate(adFormPrice);
//     const isValid = pristine.validate(form);

//     if (isValid) {
//       // eslint-disable-next-line no-console
//       console.log('isValid');
//       showMessage(form, 'success');
//     } else {
//       // eslint-disable-next-line no-console
//       console.log('!!!isValid');
//       showMessage(form, 'error');
//     }
//   });
// };
export { validateForm };
