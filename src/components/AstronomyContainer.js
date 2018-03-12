import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import {connect} from 'react-redux';
import fetchData from '../actions/astronomy';

import AstronomyCard from './AstronomyCard';

class AstronomyContainer extends Component {

  componentDidMount() {
    console.log('props' + this.props.astronomy);
    this.props.fetchData;
  }

  render() {
    return (
      <AstronomyCard data={this.props.astronomy} />

    )
  }
}

const mapStateToProps = state => ({
  astronomy: state.astronomy
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(fetchData, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(AstronomyContainer);