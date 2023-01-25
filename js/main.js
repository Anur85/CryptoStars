import { renderUser, hiddenUser } from './render-user.js';
import { getData } from './api.js';
import { loadConractors } from './load-contractots.js';
//import { filterByVerified } from './filter.js';

import { initChangeMode } from './change-mode.js';

const checkboxCustom = document.querySelector('#checked-users');

const USER_URL = 'https://cryptostar.grading.pages.academy/user';

//const CONTRACTORS_URL = `${BASE_URL}/contractors`;

getData(USER_URL, renderUser, hiddenUser);

initChangeMode();
checkboxCustom.addEventListener('change', loadConractors);
