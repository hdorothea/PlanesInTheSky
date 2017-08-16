import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import DashBoard from '../components/DashBoard';
import { keysToIndexApp, filterableValues } from '../utils/ApiUtils';

class DashBoardContainer extends React.Component {
  getFilteredObservations() {
    if (this.props.showAll) {
      return this.props.observations;
    } else {
      return this.props.observations.filter(
        observation =>
          (this.props.airlineCountryFilters.length > 0
            ? this.props.airlineCountryFilters.includes(observation[keysToIndexApp.airlineCountry])
            : true) &&
          this.props.latitudeRangeFilter.currentMax > observation[keysToIndexApp.latitude] &&
          this.props.latitudeRangeFilter.currentMin < observation[keysToIndexApp.latitude] &&
          this.props.longtitudeRangeFilter.currentMax > observation[keysToIndexApp.longtitude] &&
          this.props.longtitudeRangeFilter.currentMin < observation[keysToIndexApp.longtitude],
      );
    }
  }

  render() {
    if (this.props.observations.length > 0) {
      return (
        <DashBoard
          latitudeRangeFilter={this.props.latitudeRangeFilter}
          longtitudeRangeFilter={this.props.longtitudeRangeFilter}
          observations={this.getFilteredObservations()}
          showAll={this.props.showAll}
        />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  observations: state.api.observations,
  showAll: state.filter.showAll,
  airlineCountryFilters: state.filter.airlineCountry,
  latitudeRangeFilter: state.filter.latitude,
  longtitudeRangeFilter: state.filter.longtitude,
});

export default connect(mapStateToProps)(DashBoardContainer);
