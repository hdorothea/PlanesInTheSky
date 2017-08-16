import React from 'react';
import { FilterInput } from './FilterInput';
import { FilterBoard } from './FilterBoard';
import './FilterView.css';

export const FilterView = function ({
  name,
  uniqueFilterValues,
  addFilter,
  removeFilter,
  activeFilterValues
}) {
  return (
    <div className="filter-view">
      <div className="name"> {name.toUpperCase()} </div>
      <FilterInput
        addFilter={addFilter}
        uniqueFilterValues={uniqueFilterValues}
      />
      <FilterBoard
        removeFilter={removeFilter}
        filterValues={activeFilterValues}
      />
    </div>
  );
};
