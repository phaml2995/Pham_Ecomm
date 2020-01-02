import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';

//Using Persist to maintain the cart state of cart items across session
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootSaga from './root-saga';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleWare();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development'){
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

