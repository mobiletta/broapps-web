import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPointSpreads } from '../../store/actions/odds';
import { withPolling } from './withPolling';

class OddsList extends Component {
  render() {
    const { odds } = this.props;
    const { data } = odds;
    if (Array.isArray(data) && data.length > 0) {
      return (
        <div>
          <h4>Odds</h4>
          {data.map(odd => {
            return (
              <div key={odd.index}>
                <hr />
                <h4>
                  <Link to={`/odds/${odd.index}`}>
                    {odd.index}: {odd.home_team}
                  </Link>
                </h4>
                <p>{odd.commence_time}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>No odds</div>;
    }
  }
}

const mapStateToProps = state => ({ odds: state.odds });

const mapDispatchToProps = {};

export default withPolling(getPointSpreads)(connect(mapStateToProps, mapDispatchToProps)(OddsList));
