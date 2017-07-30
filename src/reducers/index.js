import { combineReducers } from 'redux';

import { api } from './api';
import { router } from './router';

const Reducer = combineReducers({
  api,
  router
});

export default Reducer;
