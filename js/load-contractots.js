import { getData } from './api.js';
import { filterByVerified } from './filter.js';
import { ClearList } from './render-list-contractors.js';

const CONTRACTORS_URL = 'https://cryptostar.grading.pages.academy/contractors';

const loadListConractors = () => {
  getData(CONTRACTORS_URL, filterByVerified, ClearList);
};

export { loadListConractors };
