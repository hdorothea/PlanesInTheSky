import React from 'react';
import { geoMercator, geoAzimuthalEqualArea, geoPath } from 'd3-geo';
import worlddata from '../data/world';
import { keysToIndexApp } from '../utils/ApiUtils';
import countryToCode from '../data/countryToCode';

export default function WorldMap({ observations }) {
  // longtitude to rotate
  // latitude with center
  // to have this responsive scale the projection find out correct width and height for desktop
  // technically to have this zoom in scale the projection and set x any y of the aspect ratio
  const projection = geoMercator().scale(150).rotate([80, 0]).center([0, 65]);
  const pathGenerator = geoPath().projection(projection);
  observations.map((observation) => {
    if (!countryToCode[observation[keysToIndexApp.airlineCountry]]) {
      console.log(observation[keysToIndexApp.airlineCountry]);
    }
  });
  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMinYMin"
    >
      {worlddata.features.map((d, i) =>
        (<path
          key={`path-${i}`}
          d={pathGenerator(d)}
          style={{ fill: 'palegoldenrod', stroke: 'silver' }}
        />),
      )}
      {observations.map(observation =>
        (<image
          xlinkHref={`countries/${countryToCode[observation[keysToIndexApp.airlineCountry]]}.png`}
          width="15"
          height="15"
          transform={`translate(${projection([
            observation[keysToIndexApp.longtitude],
            observation[keysToIndexApp.latitude],
          ])})`}
        />),
      )}
    </svg>
  );
}
