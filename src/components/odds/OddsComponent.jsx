/* import * as React from 'react';
import { connect } from 'react-redux';
import { loadNflOdds } from '../../store/actions/oddsActions';
import { withPolling } from './withPolling';

class OddsComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>start</th>
              <th>home</th>
              <th>moneyline</th>
              <th>visitor</th>
              <th>moneyline</th>
              <th>updated</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(this.props.odds).map(([key, value]) => (
              <tr key={key}>
                <td>{JSON.stringify(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  odds: state,
});

const mapDispatchToProps = {};

export default withPolling(loadNflOdds)(connect(mapStateToProps, mapDispatchToProps)(OddsComponent));
 */
