import React from 'react';
import RangeFilter from '../components/RangeFilter';
import './RangeFilterView.css';


export default function RangeFilterView({ rangeFilters, updateCurrentRange }) {
  return (
    <div className="range-filter-view">
      {rangeFilters.map(filter =>
        (<RangeFilter
          key={filter.filterKey}
          name={filter.filterKey}
          min={filter.filterValue.min}
          max={filter.filterValue.max}
          currentMin={filter.filterValue.currentMin}
          currentMax={filter.filterValue.currentMax}
          updateCurrentRange={(currentMin, currentMax) =>
            updateCurrentRange(filter.filterKey, currentMin, currentMax)}
        />),
      )}
    </div>
  );
};
