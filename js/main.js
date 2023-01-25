import { renderUser, hiddenUser } from './render-user.js';
import { getData } from './api.js';
import { renderContractors, ClearList } from './render-list-contractors.js';
//import './filter.js';
import './page-states.js';

const BASE_URL = 'https://cryptostar.grading.pages.academy';
const USER_URL = `${BASE_URL}/user`;
const CONTRACTORS_URL = `${BASE_URL}/contractors`;

getData(USER_URL, renderUser, hiddenUser);
getData(CONTRACTORS_URL, renderContractors, ClearList);
//setTimeout(ClearList, 3000);
