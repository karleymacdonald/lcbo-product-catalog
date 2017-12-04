import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import createStore, { history } from './store/createStore';
import rootSaga from './store/sagas';
import './index.css';
import App from './App';

const store = createStore();
store.runSaga(rootSaga);

const el = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  el
)