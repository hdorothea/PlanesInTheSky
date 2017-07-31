import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import DashBoard from '../components/DashBoard';
import { keysToIndexApp, filterableValues } from '../utils/ApiUtils';

class VisibleObservations extends React.Component {
  getFilteredObservations() {
    switch (this.props.showModal) {
      case 'SHOW_ALL':
        return this.props.observations;
      case 'SHOW_FILTERED':
        console.log(this.props.filters)
        return this.props.observations.filter((observation) => {
          for (const [filterValue, filterObservations] of Object.entries(this.props.filters)) {
            // console.log(filterObservations);
            // console.log(observation[keysToIndexApp[filterValue]]);
            if (filterObservations.includes(observation[keysToIndexApp[filterValue]])) return true;
          }
          return false;
        });
    }
  }

  render() {
    if (this.props.observations.length > 0) {
      return <DashBoard observations={this.getFilteredObservations()} />;
    } else {
      return null;
    }
  }
}

function getFilters(filterableValues, router) {
  const filters = {};
  for (const filterableValue of filterableValues) {
    filters[filterableValue] = router[filterableValue];
  }
  return filters;
}

const mapStateToProps = state => ({
  observations: state.api.observations,
  showModal: state.router.showModal,
  filters: getFilters(filterableValues, state.router),
});

export default connect(mapStateToProps)(VisibleObservations);
