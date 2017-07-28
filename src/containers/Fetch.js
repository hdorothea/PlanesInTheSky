import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchData } from '../actions/ApiActions.js';
// import { App } from '../App';

class Fetch extends React.Component {
  onMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

Fetch.propTypes = { fetchData: PropTypes.func.isRequired };

Fetch.defaultProps = {};

const mapDispatchToProps = dispatch => ({
  fetchData: dispatch(fetchData()),
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);
