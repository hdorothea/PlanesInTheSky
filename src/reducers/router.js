import * as types from '../actions/ActionTypes';

const initialState = {};

export function router(state = initialState, action) {
  switch (action.type) {
    case types.SET_ROUTE:
      return Object.assign({}, action);
    default:
      return state;
  }
}
