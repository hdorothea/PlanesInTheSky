import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import worlddata from '../data/world';
import Plane from './Plane';
import { keysToIndexApp, latitudeBounds, longtitudeBounds } from '../utils/ApiUtils';
import './WorldMap.css';

export default class WorldMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { observations, latitudeRangeFilter, longtitudeRangeFilter, showAll } = this.props;
    // zooming see: https://stackoverflow.com/a/14691788/7174408
    const width = 800;
    const height = 700;

    const projection = geoMercator().scale(1).translate([0, 0]);
    const pathGenerator = geoPath().projection(projection);

    const b = [
      projection([
        Math.max(longtitudeRangeFilter.min, -179.9),
        Math.max(latitudeRangeFilter.min, -89.9),
      ]),
      projection([
        Math.min(longtitudeRangeFilter.max, 179.9),
        Math.min(latitudeRangeFilter.max, 89.9),
      ]),
    ];
    const s = 0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][0]) / height);
    const t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
    projection.scale(s).translate(t);
    return (
      <div id="world-map-container">
        <svg viewBox={`0, -120 ${width} ${height}`} preserveAspectRatio="xMinYMin">
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
          {!showAll
            ? <polyline
              fill="none"
              stroke="black"
              points={`
            ${projection([
        longtitudeRangeFilter.currentMin + 0.01,
        latitudeRangeFilter.currentMax - 0.01,
      ]).join(',')} 
            ${projection([
        longtitudeRangeFilter.currentMin + 0.01,
        latitudeRangeFilter.currentMin + 0.01,
      ]).join(',')}
            ${projection([
        longtitudeRangeFilter.currentMax - 0.01,
        latitudeRangeFilter.currentMin + 0.01,
      ]).join(',')}
            ${projection([
        longtitudeRangeFilter.currentMax - 0.01,
        latitudeRangeFilter.currentMax - 0.01,
      ]).join(',')}
            ${projection([
        longtitudeRangeFilter.currentMin + 0.01,
        latitudeRangeFilter.currentMax - 0.01,
      ]).join(',')} `}
            />
            : ''}
        </svg>
      </div>
    );
  }
}
