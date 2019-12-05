import axios from 'axios';

export const FETCH_ODDS = 'FETCH_ODDS';
export const FETCH_DATA_REJECTED = 'FETCH_DATA_REJECTED';

const apiUrl = 'https://api.the-odds-api.com/v3/odds/?apiKey=aeff4f15293dc25558bb825bc6d5f198&sport=americanfootball_nfl&region=us&mkt=';

const receiveOdds = data => ({
  type: FETCH_ODDS,
  odds: data,
});

function getOddsPointSpread() {
  return axios.get(`${apiUrl}spreads`);
}

function getOddsMoneyline() {
  return axios.get(`${apiUrl}h2h`);
}

function getOddsTotals() {
  return axios.get(`${apiUrl}totals`);
}

export const getPointSpreads = () => {
  return dispatch => {
    return axios
      .all([getOddsPointSpread(), getOddsMoneyline(), getOddsTotals()])
      .then(
        axios.spread(function(spreads, moneylines, totals) {
          console.log(spreads);
          console.log(moneylines);
          console.log(totals);
          //let vehicles = seat.data.concat(volkswagen.data);
          let oddsData = spreads.data;
          dispatch(receiveOdds(oddsData));
        }),
      )
      .catch(error => {
        dispatch({ type: 'FETCH_DATA_REJECTED', odds: error });
      });
  };
};
