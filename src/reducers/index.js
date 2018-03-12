import { combineReducers } from 'redux';
import AppReducer from './astronomy';

const rootReducer = combineReducers({
  astronomy: AppReducer,
})

export default rootReducer;