import axios from 'axios';

export const FETCH_ODDS = 'FETCH_ODDS';
export const FETCH_DATA_REJECTED = 'FETCH_DATA_REJECTED';

const apiUrl = 'https://api.the-odds-api.com/v3/odds/?apiKey=aeff4f15293dc25558bb825bc6d5f198&sport=americanfootball_nfl&region=us&mkt=';

const receiveOdds = data => ({
  type: FETCH_ODDS,
  odds: data,
});

export const getPointSpreads = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}spreads`)
      .then(response => {
        console.log(response);
        dispatch(receiveOdds(response.data));
      })
      .catch(error => {
        dispatch({ type: 'FETCH_DATA_REJECTED', odds: error });
      });
  };
};
