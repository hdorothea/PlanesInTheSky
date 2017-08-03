import * as types from '../actions/ActionTypes';

const initialState = {
  show: 'SHOW_ALL',
  airlineCountry: [],
  flyoverCountry: [],
};

export function filter(state = initialState, action) {
  switch (action.type) {
    case types.SET_SHOW:
      return Object.assign({}, state, { action });
    case types.ADD_FILTER:
      return Object.assign({}, state, {
        [action.filterKey]: [...state[action.filterKey], action.filterValue],
      });
    case types.REMOVE_FILTER:
      return Object.assign({}, state, {
        [action.filterKey]: state[action.filterKey].filter(
          filterValue => filterValue !== action.filterValue,
        ),
      });
    default:
      return state;
  }
}
