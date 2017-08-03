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
  airlineCountry: 1
};

export function prepareData(observations) {
  return observations.states
    .filter(observation => !!observation[keysToIndexApi.on_ground])
    .map(observation => [
      observation[keysToIndexApi.icao24],
      observation[keysToIndexApi.origin_country]
    ]);
}
