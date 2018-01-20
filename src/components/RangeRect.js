import React from 'react';


const RangeRect = ({ projection, longtitudeRangeFilter, latitudeRangeFilter }) => {
  let {
    currentMin: longtitudeCurrentMin,
    currentMax: longtitudeCurrentMax
  } = longtitudeRangeFilter;

  let { currentMin: latitudeCurrentMin, currentMax: latitudeCurrentMax } = latitudeRangeFilter;

  longtitudeCurrentMin = Math.max(longtitudeCurrentMin, -179.9);
  longtitudeCurrentMax = Math.min(longtitudeCurrentMax, 179.9);
  latitudeCurrentMin = Math.max(latitudeCurrentMin, -89.9);
  latitudeCurrentMax = Math.min(latitudeCurrentMax, 89.9);
  return (
    <polyline
      fill="none"
      stroke="grey"
      strokeWidth="2"
      points={`
            ${projection([longtitudeCurrentMin, latitudeCurrentMax]).join(',')} 
            ${projection([longtitudeCurrentMin, latitudeCurrentMin]).join(',')}
            ${projection([longtitudeCurrentMax, latitudeCurrentMin]).join(',')}
            ${projection([longtitudeCurrentMax, latitudeCurrentMax]).join(',')}
            ${projection([longtitudeCurrentMin, latitudeCurrentMax]).join(',')} `}
    />
  );
};


export default RangeRect;
