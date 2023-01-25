import { renderUser, hiddenUser } from './render-user.js';
import { getData } from './api.js';
import { ClearList } from './render-list-contractors.js';
import { filterByVerified } from './filter.js';
//import './page-states.js';
const checkboxCustom = document.querySelector('#checked-users');

const BASE_URL = 'https://cryptostar.grading.pages.academy';
const USER_URL = `${BASE_URL}/user`;
const CONTRACTORS_URL = `${BASE_URL}/contractors`;

getData(USER_URL, renderUser, hiddenUser);
const loadConractors = () => getData(CONTRACTORS_URL, filterByVerified, ClearList);
loadConractors();
checkboxCustom.addEventListener('change', loadConractors);
//setTimeout(ClearList, 3000);
