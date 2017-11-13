import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';// import routes from './routes';
import item from './data/itemReducers';// import routes from './routes';

const rootReducer = combineReducers({
  item,
});

export default rootReducer;
