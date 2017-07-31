import React from 'react';
import { FilterInput } from './FilterInput';
// import { FilterBoard } from './FilterBoard';

export const FilterView = function ({ filterables, addFilter, removeFilter }) {
  return (
    <div className="FilterInputView">
      {Object.entries(filterables).map(([filterableValue, filterableObservations]) =>
        (<FilterInput
          key={filterableValue}
          filterableValue={filterableValue}
          filterableObservations={filterableObservations}
          addFilter={addFilter}
        />),
      )}
    </div>
  );
};

// <FilterBoard removeFilter={removeFilter} />
