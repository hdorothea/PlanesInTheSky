import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import DashBoard from '../components/DashBoard';
import { keysToIndexApp } from '../utils/ApiUtils';

class DataFilter extends React.Component {
  getFilteredObservations() {
    switch (this.props.showFilter) {
      case 'SHOW_ALL':
        return this.props.data;
      case 'SHOW_FILTERED':
        return this.props.data.filter(datapoint => this.props.airlineCountryFilters.includes(
          datapoint[keysToIndexApp.airlineCountry],
        ));
    }
  }

  getValues() {

  }

  render() {
    if (this.props.data) {
      return <DashBoard observations={this.getFilteredObservations()} />;
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  observations: state.api.observations,
  showFilter: state.router.showFilter,
  flyoverCountryFilters: state.router.flyOverCountry,
  airlineCountryFilters: state.router.airlineCountry,
});

export default connect(mapStateToProps)(DataFilter);
