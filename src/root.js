import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';

import Fetch from './containers/Fetch';

export const Root = ({ store }) => (
  <Provider store={store}>
    <Fetch>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/:showFilter" component={App} />
        </Switch>
      </BrowserRouter>
    </Fetch>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};
