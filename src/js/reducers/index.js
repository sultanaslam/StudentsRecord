import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer';
import sendDataReducer from './sendDataReducer';

const rootReducer = combineReducers({
  data: fetchDataReducer,
  send: sendDataReducer
});

export default rootReducer;
