import { combineReducers } from 'redux';

import { api } from './api';
import { filter } from './filter';

const Reducer = combineReducers({
  api,
  filter
});

export default Reducer;
