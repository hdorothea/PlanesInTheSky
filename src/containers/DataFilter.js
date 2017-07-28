import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import DashBoard from '../components/DashBoard';

class DataFilter extends React.Component {
  getFilteredData() {
    console.log(this.props.contentFilters);
    switch (this.props.showFilter) {
      case 'SHOW_ALL':
        return this.props.data;
      case 'SHOW_FILTERED':
        return [{ id: 'filtered', originCountry: 'BoraBora' }];
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
});

DataFilter.propTypes = {
  data: PropTypes.array,
  showFilter: PropTypes.string.isRequired,
};

DataFilter.defaultProps = {
  data: null,
};

export default connect(mapStateToProps)(DataFilter);
