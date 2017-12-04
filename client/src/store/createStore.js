import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers';

export const history = createHistory();

export default (initialState = {}) => {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
    routerMiddleware(history)
  ]

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )

  store.runSaga = (saga) => {
    sagaMiddleware.run(saga);
  }

  return store;
};





