import React from 'react';
import { FilterInput } from './FilterInput';
import { FilterBoard } from './FilterBoard';

export const FilterView = function ({
  name,
  uniqueFilterValues,
  addFilter,
  removeFilter,
  activeFilterValues
}) {
  return (
    <div>
      <FilterInput
        name={name}
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
