import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import worlddata from '../data/world';
import Plane from './Plane';
import { keysToIndexApp } from '../utils/ApiUtils';
import './WorldMap.css';

export default function WorldMap({ observations, latitudeBounds, longtitudeBounds }) {
  // zooming see: https://stackoverflow.com/a/14691788/7174408
  const width = 800;
  const height = 800;

  const projection = geoMercator().scale(1).translate([0, 0]);
  const pathGenerator = geoPath().projection(projection);
  const b = [
    projection([longtitudeBounds[0] + 0.01, latitudeBounds[0] + 0.01]),
    projection([longtitudeBounds[1] - 0.01, latitudeBounds[1] - 0.01]),
  ];
  const s = 0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][0]) / height);
  const t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
  projection.scale(s).translate(t);
  return (
    <div id="world-map-container">
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMin">
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
    </div>
  );
}
