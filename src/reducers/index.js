import { combineReducers } from 'redux';
import reducerData from './reducer-data';

const rootReducer = combineReducers({
  data : reducerData,
});

export default rootReducer;
