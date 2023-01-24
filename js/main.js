import { renderUser, hiddenUser } from './render-user.js';
import { getData } from './api.js';

const BASE_URL = 'https://cryptostar.grading.pages.academy';
const USER_URL = `${BASE_URL}/user`;
//const CONTRACTORS_URL = `${BASE_URL}/contractors`;

getData(USER_URL, renderUser, hiddenUser);
