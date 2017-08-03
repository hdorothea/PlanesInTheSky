import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import DashBoard from '../components/DashBoard';
import { keysToIndexApp, filterableValues } from '../utils/ApiUtils';

class DashBoardContainer extends React.Component {
  getFilteredObservations() {
    switch (this.props.showModal) {
      case 'SHOW_ALL':
        return this.props.observations;
      case 'SHOW_FILTERED':
        return this.props.observations.filter(
          observation =>
            this.props.flyoverCountryFilters.includes(observation.flyoverCountry) ||
            this.props.airlineCountryFilters.includes(observation.airlineCountry),
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
  showModal: state.filter.show,
  airlineCountryFilters: state.filter.airlineCountry,
  flyoverCountryFilters: state.filter.flyoverCountry,
});

export default connect(mapStateToProps)(DashBoardContainer);
