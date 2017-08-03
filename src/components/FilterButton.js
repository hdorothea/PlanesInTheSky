import React from 'react';

export default function filterButton({ filterValue, removeFilter }) {
  return (
    <div>
      <div> {filterValue} </div>
      <div onClick={removeFilter}> x </div>
    </div>
  );
}