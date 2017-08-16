import React from 'react';
import FilterButton from './FilterButton';
import './FilterBoard.css';

export function FilterBoard({ filterValues, removeFilter }) {
  return (
    <div className="filter-board">
      {filterValues.map(value => (
        <FilterButton key={value} filterValue={value} removeFilter={() => removeFilter(value)} />
      ))}
    </div>
  );
}
