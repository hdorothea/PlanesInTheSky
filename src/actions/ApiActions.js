import fetch from 'isomorphic-fetch';
import { prepareData } from '../utils/ApiUtils.js';
import * as types from './ActionTypes';

function startDataRequest() {
  return { type: types.REQUEST_START };
}

function receiveData(observations) {
  observations = prepareData(observations);
  return {
    type: types.RECEIVE_DATA,
    observations
  };
}

function acknowledgeRequestFail(err) {
  return { type: types.REQUEST_FAIL, err };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(startDataRequest());
    return fetch('https://opensky-network.org/api/states/all')
      .then(response => response.json())
      .then(observations => dispatch(receiveData(observations)))
      .catch(err => dispatch(acknowledgeRequestFail(err)));
  };
}
