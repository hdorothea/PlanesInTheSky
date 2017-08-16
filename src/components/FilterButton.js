import React from 'react';
import './FilterButton.css';
import countryToCode from '../data/countryToCode';


export default function filterButton({ filterValue, removeFilter }) {
  return (
    <div className="filter-button">
      <img src={`countries/${countryToCode[filterValue]}.png`} />
      <div className="name"> {filterValue} </div>
      <div className="x" onClick={removeFilter}> x </div>
    </div>
  );
}
