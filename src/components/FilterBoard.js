import React from 'react';
import FilterButton from './FilterButton';

export function FilterBoard({ filterValues, removeFilter }) {
  return (
    <div>
      {filterValues.map(value => (
        <FilterButton filterValue={value} removeFilter={() => removeFilter(value)} />
      ))}
    </div>
  )

}