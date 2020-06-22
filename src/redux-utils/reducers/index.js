import { combineReducers } from 'redux';
import pages from './pages';
import currentPage from './currentPage';

const mainReducer = combineReducers({
  pages,
  currentPage,
});

const rootReducer = (state, action) => {
  return mainReducer(state, action);
};

export default rootReducer;
