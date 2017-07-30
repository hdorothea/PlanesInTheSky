// see https://opensky-network.org/apidoc/rest.html
export const keysToIndexApi = {
  icao24: 0,
  call_sign: 1,
  origin_country: 2,
  time_position: 3,
  time_velocity: 4,
  longtitude: 5,
  latitude: 6,
  altitude: 7,
  on_ground: 8,
  velocity: 9,
  heading: 10,
  vertical_rate: 11,
  sensors: 12,
};

export const keysToIndexApp = {
  id: 0,
  'Airline Country': 1,
};

export function filterData(data) {
  return data.states.filter(datapoint => !!datapoint[keysToIndexApi.on_ground]);
}

export function cleanData(data) {
  return data.map(datapoint => [
    datapoint[keysToIndexApi.icao24],
    datapoint[keysToIndexApi.origin_country],
  ]);
}
