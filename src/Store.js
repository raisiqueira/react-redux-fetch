import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';

import rootReducer from './reducers'

const middlewares = applyMiddleware(
  createLogger(),
  promise
  )

const Store = createStore(
  rootReducer,
  middlewares
  );

export default Store;