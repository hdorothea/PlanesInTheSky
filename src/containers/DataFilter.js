import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import DashBoard from '../components/DashBoard';
import { keysToIndexApp } from '../utils/ApiUtils';

class DataFilter extends React.Component {
  getFilteredData() {
    switch (this.props.showFilter) {
      case 'SHOW_ALL':
        return this.props.data;
      case 'SHOW_FILTERED':
        return this.props.data.filter(datapoint => {
          console.log(datapoint[keysToIndexApp.airlineCountry]);
          return this.props.airlineCountryFilters.includes(datapoint[keysToIndexApp.airlineCountry])
        }
        );
    }
  }

  render() {
    if (this.props.data) {
      return <DashBoard data={this.getFilteredData()} />;
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  data: state.api.data,
  showFilter: state.router.showFilter,
  flyoverCountryFilters: state.router.flyOverCountry,
  airlineCountryFilters: state.router.airlineCountry,
});

export default connect(mapStateToProps)(DataFilter);
