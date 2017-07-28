import * as types from '../actions/ActionTypes';

const initialState = {
  isFetching: false,
  data: [],
};

export function api(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_START:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
      });
    default:
      return state;
  }
}
