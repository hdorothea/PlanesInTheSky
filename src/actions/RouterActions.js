import * as types from './ActionTypes';
import { filterableValues } from '../utils/ApiUtils';

const Url = require('domurl');

export function setRoute(path, pushState = false) {
  if (pushState) {
    window.history.pushState(null, null, path);
  }

  const values = {};
  const rUrl = new Url(path);


  for (const [value, observation] of Object.entries(rUrl.query)) {
    if (filterableValues.includes(value)) {
      if (value instanceof String) {
        values[value] = [observation];
      } else {
        values[value] = observation;
      }
    }
  }

  return Object.assign(values, {
    type: types.SET_ROUTE,
    path,
    showModal: rUrl.paths()[0],
  });
}

export function listenPathChange() {
  return (dispatch) => {
    window.onpopstate = (e) => {
      dispatch(setRoute(e.state.route));
    };
  };
}

export function addFilter(path, value, observation) {
  return (dispatch) => {
    const rUrl = new Url(path);

    if (rUrl.query[value]) {
      if (!(rUrl.query[value] instanceof Array)) {
        rUrl.query[value] = [rUrl.query[value]];
      }
      if (rUrl.query[value].includes(observation)) {
        return;
      }
      rUrl.query[value].push(observation);
    } else {
      rUrl.query[value] = observation;
    }
    dispatch(setRoute(rUrl.toString(), true));
  };
}

export function removeFilter(path, value, observation) {
  return (dispatch) => {
    const rUrl = new Url(path);
    if (rUrl.query[value] instanceof Array) {
      rUrl.query[value] = rUrl.query(value).filter(_observation => _observation !== observation);
    } else {
      delete rUrl.query[value];
    }
    dispatch(setRoute(rUrl.toString(), true));
  };
}
