import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import { FilterView } from '../components/FilterView';
import { addFilter } from '../actions/FilterActions';
import { removeFilter } from '../actions/FilterActions';
import { keysToIndexApp } from '../utils/ApiUtils';

const propTypes = {
  uniqueAirlineCountries: PropTypes.array,
  addFilter: PropTypes.func,
  removeFilter: PropTypes.func,
  activeAirlineCountryFilterValues: PropTypes.array
};

const defaultProps = {
  uniqueAirlineCountries: [],
  addFilter: () => null,
  removeFilter: () => null,
  activeAirlineCountryFilterValues: () => null
};

function FilterContainer({
  uniqueAirlineCountries,
  addFilter,
  removeFilter,
  activeAirlineCountryFilterValues
}) {
  return (
    <FilterView
      name="Airline Country"
      addFilter={filterValue => addFilter('airlineCountry', filterValue)}
      removeFilter={filterValue => removeFilter('airlineCountry', filterValue)}
      uniqueFilterValues={uniqueAirlineCountries}
      activeFilterValues={activeAirlineCountryFilterValues}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  addFilter: (filterKey, filterValue) => dispatch(addFilter(filterKey, filterValue)),
  removeFilter: (filterKey, filterValue) => dispatch(removeFilter(filterKey, filterValue))
});

function getUniqueValues(observations, key) {
  return [...new Set(observations.map(observation => observation[keysToIndexApp[key]]))];
}

const mapStateToProps = state => ({
  uniqueAirlineCountries: getUniqueValues(state.api.observations, 'airlineCountry'),
  activeAirlineCountryFilterValues: state.filter.airlineCountry
});
FilterContainer.propTypes = propTypes;

FilterContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
