import { createStore, applyMiddleware } from 'redux';
//Using Persist to maintain the cart state of cart items across session

import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

