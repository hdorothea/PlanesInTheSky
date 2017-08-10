import React from 'react';
import { geoMercator, geoAzimuthalEqualArea, geoPath } from 'd3-geo';
import worlddata from '../data/world';
import Plane from './Plane';
import { keysToIndexApp } from '../utils/ApiUtils';

export default function WorldMap({ observations }) {
  // longtitude to rotate
  // latitude with center
  // to have this responsive: scale the projection find out correct width and height for desktop
  // technically to have this zoom in: scale the projection and set x any y of the aspect ratio
  const projection = geoMercator().rotate([80, 0]).center([0, 65]);
  const pathGenerator = geoPath().projection(projection);

  return (
    <svg viewBox="0 0 1000 700" preserveAspectRatio="xMinYMin">
      {worlddata.features.map((d, i) =>
        (<path
          key={`path-${i}`}
          d={pathGenerator(d)}
          style={{ fill: 'palegoldenrod', stroke: 'silver' }}
        />),
      )}
      {observations.map(observation =>
        (<Plane
          key={observation[keysToIndexApp.id]}
          observation={observation}
          transform={`translate(${projection([
            observation[keysToIndexApp.longtitude],
            observation[keysToIndexApp.latitude],
          ])})`}
        />),
      )}
    </svg>
  );
}
