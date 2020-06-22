import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

const store = configureStore({
  reducer: rootReducer, // put reducer here
  middleware,
});

sagaMiddleware.run(rootSaga); // pass the root saga to watch

export default store;
