import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducer from './reducers/index';
import { Root } from './root';

import { setRoute } from './actions/RouterActions';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(setRoute(window.location.pathname + window.location.search));

render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
