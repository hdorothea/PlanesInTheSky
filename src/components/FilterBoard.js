import React from 'react';
import FilterButton from './FilterButton';

export function FilterBoard({ filterValues, removeFilter }) {
  return (
    <div>
      {filterValues.map(value => (
        <FilterButton key={value} filterValue={value} removeFilter={() => removeFilter(value)} />
      ))}
    </div>
  )

}