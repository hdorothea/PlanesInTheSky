import React from 'react';
import { connect } from 'react-redux';
import Rect from '../components/Rect';
import { projection } from '../components/WorldMap';

const RangeRectContainer = ({ latitudeRangeFilter, longtitudeRangeFilter }) => {
  let {
    currentMin: longtitudeCurrentMin,
    currentMax: longtitudeCurrentMax
  } = longtitudeRangeFilter;

  let { currentMin: latitudeCurrentMin, currentMax: latitudeCurrentMax } = latitudeRangeFilter;

  longtitudeCurrentMin = Math.max(longtitudeCurrentMin, -179.9);
  longtitudeCurrentMax = Math.min(longtitudeCurrentMax, 179.9);
  latitudeCurrentMin = Math.max(latitudeCurrentMin, -89.9);
  latitudeCurrentMax = Math.min(latitudeCurrentMax, 89.9);
  console.log(projection([longtitudeCurrentMin, latitudeCurrentMax]));
  console.log(projection([longtitudeCurrentMin]));
  return (
    <Rect
      x0={projection([longtitudeCurrentMin, 0])[0]}
      y0={projection([0, latitudeCurrentMax])[1]}
      x1={projection([longtitudeCurrentMax, 0])[0]}
      y1={projection([0, latitudeCurrentMin])[1]}
    />
  );
};

const mapStateToProps = state => ({
  latitudeRangeFilter: state.filter.latitude,
  longtitudeRangeFilter: state.filter.longtitude
});

export default connect(mapStateToProps)(RangeRectContainer);
