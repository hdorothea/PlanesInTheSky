import * as types from './ActionTypes';

const Url = require('domurl');


export function setRoute(path) {
  const rUrl = new Url(path);
  const query = Object.assign({}, rUrl.query);
  return Object.assign(query, {
    type: types.SET_ROUTE,
    path,
    showFilter: rUrl.paths()[0],
  });
}

export function listenPathChange() {
  return (dispatch) => {
    window.onpopstate = (e) => {
      dispatch(setRoute(e.state.route));
    };
  };
}
