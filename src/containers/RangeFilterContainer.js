import { connect } from 'react-redux';
import { updateRangeFilter } from '../actions/FilterActions';
import RangeFilterView from '../components/RangeFilterView';
import { latitudeBounds, longtitudeBounds } from '../utils/ApiUtils';

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

export default connect(mapStateToProps, mapDispatchToProps)(RangeFilterView);
