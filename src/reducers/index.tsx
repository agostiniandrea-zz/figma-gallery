import { combineReducers } from 'redux';
import favourites from './favourites';
import pages from './pages';

export default combineReducers({
  favourites,
  pages
});