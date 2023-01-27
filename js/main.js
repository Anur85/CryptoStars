import { renderUser, hiddenUser } from './render-user.js';
import { getData } from './api.js';
import { loadListConractors } from './load-contractots.js';
import { initChangeMode } from './change-mode.js';

// import './modal.js';

const USER_URL = 'https://cryptostar.grading.pages.academy/user';

getData(USER_URL, renderUser, hiddenUser);
loadListConractors();

initChangeMode();
