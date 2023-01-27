import { renderUser, hiddenUser } from './render-user.js';
import { getData } from './api.js';
import { loadListConractors } from './load-contractots.js';
import { initChangeMode } from './change-mode.js';
const USER_URL = 'https://cryptostar.grading.pages.academy/user';
//const checkboxCustom = document.querySelector('#checked-users');

//const CONTRACTORS_URL = `${BASE_URL}/contractors`;

getData(USER_URL, renderUser, hiddenUser);
loadListConractors();

initChangeMode();
//checkboxCustom.addEventListener('change', loadConractors);
