import { connect } from 'react-redux';
import React from 'react';

import { FilterView } from '../components/FilterView';
import { addFilter } from '../actions/RouterActions';
import { removeFilter } from '../actions/RouterActions';
import { keysToIndexApp, filterableValues } from '../utils/ApiUtils';


class FilterContainer extends React.Component {
  addFilter() {
    return (value, observation) => this.props.addFilter(this.props.path, value, observation);
  }

  removeFilter() {
    return (value, observation) => this.props.removeFilter(this.props.path, value, observation);
  }

  render() {
    return (
      <FilterView
        addFilter={this.addFilter()}
        removeFilter={this.removeFilter()}
        filterables={this.props.filterables}
      />
    );
  }
}

function getFilterables(filterableValues, observations) {
  const filterableObservations = {};
  for (const filterableValue of filterableValues) {
    filterableObservations[filterableValue] = [
      ...new Set(observations.map(observation => observation[keysToIndexApp[filterableValue]])),
    ];
  }

  return filterableObservations;
}

const mapDispatchToProps = dispatch => ({
  addFilter: (path, value, observation) => {
    dispatch(addFilter(path, value, observation));
  },
  removeFilter: (path, value, observation) => {
    dispatch(removeFilter(path, value, observation));
  },
});

const mapStateToProps = state => ({
  filterables: getFilterables(filterableValues, state.api.observations),
  path: state.router.path,
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
