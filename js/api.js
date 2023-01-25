const getData = async (GET_URL, onSuccess, onFail) => {
  try {
    const response = await fetch(GET_URL);

    if (!response.ok) {
      throw new Error('Не удалось загрузить объявления');
    }

    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error>>>', error);
    onFail(error.message);
  }
};

// const sendData = async (onSuccess, onFail, body) => {
//   try {
//     const response = await fetch(BASE_URL, {
//       method: 'POST',
//       body
//     });

//     if (!response.ok) {
//       throw new Error('Не удалось отправить форму. Попробуйте еще раз.');
//     }

//     onSuccess();
//   } catch (error) {
//     onFail(error.message);
//   }
// };

export { getData };
