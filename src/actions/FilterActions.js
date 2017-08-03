import * as types from '../actions/ActionTypes';

export function toggleShow() {
  return {
    type: types.TOGGLE_SHOW
  };
}

export function addFilter(filterKey, filterValue) {
  return {
    type: types.ADD_FILTER,
    filterKey,
    filterValue
  };
}

export function removeFilter(filterKey, filterValue) {
  return {
    type: types.REMOVE_FILTER,
    filterKey,
    filterValue
  };
}
