import React from 'react';
import ReactSlider from 'react-slider';
import styles from './RangeFilter.css';

export default function RangeFilter({
  min,
  max,
  currentMin,
  currentMax,
  updateCurrentRange,
  name,
}) {
  return (
    <div className="range-filter">
      <div className="name">
        {name.toUpperCase()}
      </div>
      <div className="labelled-slider">
        <div className="label">
          {currentMin}
        </div>
        <ReactSlider
          min={min}
          max={max}
          onChange={(e) => {
            updateCurrentRange(e[0], e[1]);
          }}
          value={[currentMin, currentMax]}
        />
        <div className="label">
          {currentMax}
        </div>
      </div>
    </div>
  );
}
