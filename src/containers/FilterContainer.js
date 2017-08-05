import { connect } from 'react-redux';
import React from 'react';

import { FilterView } from '../components/FilterView';
import { addFilter } from '../actions/FilterActions';
import { removeFilter } from '../actions/FilterActions';
import { keysToIndexApp } from '../utils/ApiUtils';

function FilterContainer({
  uniqueAirlineCountries,
  addFilter,
  removeFilter,
  activeAirlineCountryFilterValues,
}) {
  return (
    <div>
      <FilterView
        name="Airline Country"
        addFilter={filterValue => addFilter('airlineCountry', filterValue)}
        removeFilter={filterValue => removeFilter('airlineCountry', filterValue)}
        uniqueFilterValues={uniqueAirlineCountries}
        activeFilterValues={activeAirlineCountryFilterValues}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addFilter: (filterKey, filterValue) => dispatch(addFilter(filterKey, filterValue)),
  removeFilter: (filterKey, filterValue) => dispatch(removeFilter(filterKey, filterValue)),
});

function getUniqueValues(observations, key) {
  return [...new Set(observations.map(observation => observation[keysToIndexApp[key]]))];
}

const mapStateToProps = state => ({
  uniqueAirlineCountries: getUniqueValues(state.api.observations, 'airlineCountry'),
  activeAirlineCountryFilterValues: state.filter.airlineCountry,
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
