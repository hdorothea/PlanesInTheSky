import * as types from '../actions/ActionTypes';

export function setShow(value) {
  return {
    SHOW: value
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
