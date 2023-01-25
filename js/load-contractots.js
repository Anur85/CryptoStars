import { getData } from './api.js';
import { filterByVerified } from './filter.js';
import { ClearList } from './render-list-contractors.js';

const CONTRACTORS_URL = 'https://cryptostar.grading.pages.academy/contractors';

const loadConractors = () => {
  console.log('VVVV');
  getData(CONTRACTORS_URL, filterByVerified, ClearList);
};
loadConractors();

export { loadConractors };