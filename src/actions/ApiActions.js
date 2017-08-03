import fetch from 'isomorphic-fetch';
import { prepareData } from '../utils/ApiUtils.js';
import * as types from './ActionTypes';

function startDataRequest() {
  return { type: types.REQUEST_START };
}

function receiveData(observations) {
  return {
    type: types.RECEIVE_DATA,
    observations
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(startDataRequest());
    return fetch('https://opensky-network.org/api/states/all')
      .then(response => response.json(), error => console.log(error))
      .then(observations => prepareData(observations))
      .catch(() => [[112, 'Germany'], [208, 'Austria']])
      .then(observations => dispatch(receiveData(observations)));
  };
}
