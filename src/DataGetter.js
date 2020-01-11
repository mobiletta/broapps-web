import React, { Component } from 'react';
import { ODDS, BETS } from './store/dataTypes';

export const DataGetter = (dataType, WrappedComponent) => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }

    componentDidMount() {
      this.props.getData(ODDS);
      if (dataType === BETS) {
        this.props.getData(BETS);
      }
    }
  };
};
