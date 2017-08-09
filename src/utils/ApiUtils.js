// see https://opensky-network.org/apidoc/rest.html
export const keysToIndexApi = {
  icao24: 0,
  callSign: 1,
  airlineCountry: 2,
  timePosition: 3,
  timeVelocity: 4,
  longtitude: 5,
  latitude: 6,
  altitude: 7,
  onGround: 8,
  velocity: 9,
  heading: 10,
  vertical_rate: 11,
  sensors: 12,
};

export const keysToIndexApp = {
  id: 0,
  airlineCountry: 1,
  latitude: 2,
  longtitude: 3,
};

export const latitudeBounds = { max: 90, min: -90 };
export const longtitudeBounds = { max: 180, min: -180 };

export function prepareData(observations) {
  return observations.states
    .filter(observation => !!observation[keysToIndexApi.onGround] &&
    !!observation[keysToIndexApi.airlineCountry] &&
    !!observation[keysToIndexApi.latitude] &&
    !!observation[keysToIndexApi.longtitude]
    )
    .map(observation => [
      observation[keysToIndexApi.icao24],
      observation[keysToIndexApi.airlineCountry],
      observation[keysToIndexApi.latitude],
      observation[keysToIndexApi.longtitude],
    ]);
}
