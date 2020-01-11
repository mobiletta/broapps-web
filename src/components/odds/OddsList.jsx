import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOdds } from '../../store/actions/odds';
import { withPolling } from './withPolling';
import Moment from 'react-moment';
import '../layout/bets/SelectedBets.module.css';

class OddsList extends Component {
  render() {
    const { odds } = this.props;
    const { data } = odds;
    if (Array.isArray(data) && data.length > 0) {
      return (
        <div>
          {data.map((odd, index) => {
            return (
              <div className="row dashboard-cards">
                <div className="card col-md-4">
                  <div className="card-title">
                    <div key={index}>
                      <hr />
                      <h4>
                        <Link to={`/odds/${index}`}>
                          {index}: {`${odd.teams[0]} vs. ${odd.teams[1]}`}
                        </Link>
                      </h4>
                      <Moment unix>{odd.commence_time}</Moment>
                      <p>{`${odd.sites[0].odds.spreads.odds[0]} ${odd.sites[0].odds.spreads.odds[1]}`}</p>
                      <p>{`${odd.sites[0].odds.spreads.points[0]} ${odd.sites[0].odds.spreads.points[1]}`}</p>
                    </div>
                  </div>
                </div>
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

export default withPolling(getOdds)(connect(mapStateToProps, mapDispatchToProps)(OddsList));
