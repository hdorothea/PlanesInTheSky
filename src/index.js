import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducer from './reducers/index';
import { fetchData } from './actions/ApiActions.js';
import App from './App';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);

store.dispatch(fetchData());

// setInterval(() => store.dispatch(fetchData()), 10000);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
