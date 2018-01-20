import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import worlddata from '../data/world';
import Plane from './Plane';
import RangeRect from './RangeRect';
import { keysToIndexApp } from '../utils/ApiUtils';
import './WorldMap.css';

export default class WorldMap extends React.Component {
  render() {
    const { observations, latitudeRangeFilter, longtitudeRangeFilter, showAll } = this.props;
    const width = 800;
    const height = 500;

    const projection = geoMercator()
      .scale(120)
      .translate([400, 230]);
    const pathGenerator = geoPath().projection(projection);

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
                observation[keysToIndexApp.latitude]
              ])})`}
            />
          ))}
          {!showAll ? (
            <RangeRect
              projection={projection}
              longtitudeRangeFilter={longtitudeRangeFilter}
              latitudeRangeFilter={latitudeRangeFilter}
            />
          ) : (
            ''
          )}
        </svg>
      </div>
    );
  }
}
