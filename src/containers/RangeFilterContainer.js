import { connect } from 'react-redux';
import React from 'react';
import { updateRangeFilter } from '../actions/FilterActions';
import RangeFilter from '../components/RangeFilter';
import { latitudeBounds, longtitudeBounds } from '../utils/ApiUtils';

export function RangeFilterContainer({ rangeFilters, updateCurrentRange }) {
  return (
    <div>
      {rangeFilters.map(filter =>
        (<RangeFilter
          key={filter.filterKey}
          name={filter.filterKey}
          min={filter.bounds.min}
          max={filter.bounds.max}
          currentMin={filter.filterValue.currentMin}
          currentMax={filter.filterValue.currentMax}
          updateCurrentRange={(currentMin, currentMax) =>
            updateCurrentRange(filter.filterKey, currentMin, currentMax)}
        />),
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateCurrentRange: (filterKey, currentMin, currentMax) =>
    dispatch(updateRangeFilter(filterKey, currentMin, currentMax)),
});

const mapStateToProps = state => ({
  rangeFilters: [
    { filterKey: 'latitude', filterValue: state.filter.latitude, bounds: latitudeBounds },
    { filterKey: 'longtitude', filterValue: state.filter.longtitude, bounds: longtitudeBounds },
  ],
});

export default connect(mapStateToProps, mapDispatchToProps)(RangeFilterContainer);
