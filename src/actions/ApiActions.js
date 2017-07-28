import fetch from 'isomorphic-fetch';
import { filterData } from '../utils/ApiUtils.js';

function startDataRequest() {
  return { type: 'REQUEST_START' };
}

function receiveData(data) {
  return {
    type: 'RECEIVE_DATA',
    data
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(startDataRequest());
    return fetch('https://opensky-network.org/api/states/all')
      .then(response => response.json(), error => console.log(error))
      .then(data => filterData(data))
      .then(data => dispatch(receiveData(data)));
  };
}
