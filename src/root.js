import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';

import Fetch from './containers/Fetch';

export const Root = ({ store }) => (
  <Provider store={store}>
    <Fetch>
      <App />
    </Fetch>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};
