import React from 'react';
import ReactSlider from 'react-slider';
import styles from './RangeFilter.css';

export default function RangeFilter({ min, max, currentMin, currentMax, updateCurrentRange }) {
  return (
    <ReactSlider
      min={min}
      max={max}
      onAfterChange={(e) => {
        updateCurrentRange(e[0], e[1]);
      }}
      value={[currentMin, currentMax]}
    />
  );
}
