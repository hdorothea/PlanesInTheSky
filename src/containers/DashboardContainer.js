import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import DashBoard from '../components/DashBoard';
import { keysToIndexApp } from '../utils/ApiUtils';

const propTypes = {
  observations: PropTypes.array,
  latitudeRangeFilter: PropTypes.object,
  longtitudeRangeFilter: PropTypes.object,
  airlineCountryFilters: PropTypes.array,
  showAll: PropTypes.bool
};

const defaultProps = {
  observations: [],
  latitudeRangeFilter: {},
  longtitudeRangeFilter: {},
  airlineCountryFilters: [],
  showAll: true
};

class DashBoardContainer extends React.Component {
  getFilteredObservations() {
    if (this.props.showAll) {
      return this.props.observations;
    } else {
      const latMax = this.props.latitudeRangeFilter.currentMax;
      const latMin = this.props.latitudeRangeFilter.currentMin;
      const longMax = this.props.longtitudeRangeFilter.currentMax;
      const longMin = this.props.longtitudeRangeFilter.currentMin;
      return this.props.observations.filter(
        observation =>
          (this.props.airlineCountryFilters.length > 0
            ? this.props.airlineCountryFilters.includes(observation[keysToIndexApp.airlineCountry])
            : true) &&
          (latMax ? latMax > observation[keysToIndexApp.latitude] : true) &&
          (latMin ? latMin < observation[keysToIndexApp.latitude] : true) &&
          (longMax ? longMax > observation[keysToIndexApp.longtitude] : true) &&
          (longMin ? longMin < observation[keysToIndexApp.longtitude] : true)
      );
    }
  }

  render() {
    return (
      <DashBoard
        latitudeRangeFilter={this.props.latitudeRangeFilter}
        longtitudeRangeFilter={this.props.longtitudeRangeFilter}
        observations={this.getFilteredObservations() || []}
        showAll={this.props.showAll}
      />
    );
  }
}

DashBoardContainer.propTypes = propTypes;

DashBoardContainer.defaultProps = defaultProps;

const mapStateToProps = state => ({
  observations: state.api.observations,
  showAll: state.filter.showAll,
  airlineCountryFilters: state.filter.airlineCountry,
  latitudeRangeFilter: state.filter.latitude,
  longtitudeRangeFilter: state.filter.longtitude
});

export default connect(mapStateToProps)(DashBoardContainer);
