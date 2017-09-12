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
    const width = 800;
    const height = 700;

    const projection = geoMercator()
      .scale(120)
      .translate([400, 350]);
    const pathGenerator = geoPath().projection(projection);

    let {
      currentMin: longtitudeCurrentMin,
      currentMax: longtitudeCurrentMax,
    } = longtitudeRangeFilter;
    let { currentMin: latitudeCurrentMin, currentMax: latitudeCurrentMax } = latitudeRangeFilter;

    longtitudeCurrentMin = Math.max(longtitudeCurrentMin, -179.9);
    longtitudeCurrentMax = Math.min(longtitudeCurrentMax, 179.9);
    latitudeCurrentMin = Math.max(latitudeCurrentMin, -89.9);
    latitudeCurrentMax = Math.min(latitudeCurrentMax, 89.9);

    return (
      <div className="world-map">
        <svg viewBox={`0, -120 ${width} ${height}`} preserveAspectRatio="xMinYMin">
          {worlddata.features.map((d, i) => (
            <path
              key={`path-${i}`}
              d={pathGenerator(d)}
              style={{ fill: 'palegoldenrod', stroke: 'silver' }}
            />
          ))}
          {observations.map(observation => (
            <Plane
              key={observation[keysToIndexApp.id]}
              observation={observation}
              transform={`translate(${projection([
                observation[keysToIndexApp.longtitude],
                observation[keysToIndexApp.latitude],
              ])})`}
            />
          ))}
          {!showAll ? (
            <polyline
              fill="none"
              stroke="black"
              points={`
            ${projection([longtitudeCurrentMin, latitudeCurrentMax]).join(',')} 
            ${projection([longtitudeCurrentMin, latitudeCurrentMin]).join(',')}
            ${projection([longtitudeCurrentMax, latitudeCurrentMin]).join(',')}
            ${projection([longtitudeCurrentMax, latitudeCurrentMax]).join(',')}
            ${projection([longtitudeCurrentMin, latitudeCurrentMax]).join(',')} `}
            />
          ) : (
            ''
          )}
        </svg>
      </div>
    );
  }
}
