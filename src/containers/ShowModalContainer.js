import React from 'react';
import { connect } from 'react-redux';
import { toggleShow } from '../actions/FilterActions';
import ShowModal from '../components/ShowModal';

const mapStateToProps = state => ({
  showAll: state.filter.showAll
});

const mapDispatchToProps = dispatch => ({
  toggleShow: () => dispatch(toggleShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowModal);
