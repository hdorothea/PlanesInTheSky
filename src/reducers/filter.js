import * as types from '../actions/ActionTypes';
import { latitudeBounds, longtitudeBounds } from '../utils/ApiUtils';

const initialState = {
  showAll: true,
  airlineCountry: [],
  latitude: { currentMax: latitudeBounds.max, currentMin: latitudeBounds.min },
  longtitude: { currentMax: longtitudeBounds.max, currentMin: longtitudeBounds.min },
};

export function filter(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_SHOW:
      return Object.assign({}, state, { showAll: !state.showAll });
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
    case types.UPDATE_RANGE_FILTER:
      return Object.assign({}, state, {
        [action.filterKey]: { currentMax: action.newMax, currentMin: action.newMin },
      });
    default:
      return state;
  }
}
