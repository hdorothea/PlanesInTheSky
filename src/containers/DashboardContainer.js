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
      return this.props.observations.filter(observation =>
        this.props.airlineCountryFilters.includes(observation[keysToIndexApp['airlineCountry']]),
      );
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

const mapStateToProps = state => ({
  observations: state.api.observations,
  showAll: state.filter.showAll,
  airlineCountryFilters: state.filter.airlineCountry
});

export default connect(mapStateToProps)(DashBoardContainer);
