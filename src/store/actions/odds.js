import axios from 'axios';
import * as jsonpatch from 'fast-json-patch';

export const FETCH_ODDS = 'FETCH_ODDS';
export const FETCH_DATA_REJECTED = 'FETCH_DATA_REJECTED';

const apiUrl = 'https://api.the-odds-api.com/v3/odds/?apiKey=aeff4f15293dc25558bb825bc6d5f198&sport=americanfootball_nfl&region=us&mkt=';

const receiveOdds = data => ({
  type: FETCH_ODDS,
  odds: data,
});

// var merge = function() {
//   var destination = {},
//     sources = [].slice.call(arguments, 0);
//   sources.forEach(function(source) {
//     var prop;
//     for (prop in source) {
//       if (prop in destination && Array.isArray(destination[prop])) {
//         // Concat Arrays
//         destination[prop] = destination[prop].concat(source[prop]);
//       } else if (prop in destination && typeof destination[prop] === 'object') {
//         // Merge Objects
//         destination[prop] = merge(destination[prop], source[prop]);
//       } else {
//         // Set new values
//         destination[prop] = source[prop];
//       }
//     }
//   });
//   return destination;
// };

function getOddsPointSpread() {
  return axios.get(`${apiUrl}spreads`);
}

function getOddsMoneyline() {
  return axios.get(`${apiUrl}h2h`);
}

function getOddsTotals() {
  return axios.get(`${apiUrl}totals`);
}

export const getOdds = () => {
  return dispatch => {
    return axios
      .all([getOddsPointSpread(), getOddsMoneyline(), getOddsTotals()])
      .then(
        axios.spread((spreads, moneylines, totals) => {
          let patch = jsonpatch.compare(spreads.data, moneylines.data);
          console.log('Patch1: ');
          console.log(patch);
          let errors = jsonpatch.validate(patch, spreads.data);
          let updatedDocument = {};
          if (errors.length === 0) {
            updatedDocument = patch.reduce(jsonpatch.applyReducer, spreads.data);
          } else {
            for (var i = 0; i < errors.length; i++) {
              if (!errors[i]) {
                console.log('Valid patch at index', i, patch[i]);
              } else {
                console.error('Invalid patch at index', i, errors[i], patch[i]);
              }
            }
          }
          console.log('Updated Document: ');
          console.log(updatedDocument);
          patch = jsonpatch.compare(updatedDocument, totals.data);
          console.log('Patch2: ');
          console.log(patch);
          errors = jsonpatch.validate(patch, updatedDocument);
          let finalDocument = {};
          if (errors.length === 0) {
            finalDocument = patch.reduce(jsonpatch.applyReducer, updatedDocument);
          } else {
            for (var i = 0; i < errors.length; i++) {
              if (!errors[i]) {
                console.log('Valid patch at index', i, patch[i]);
              } else {
                console.error('Invalid patch at index', i, errors[i], patch[i]);
              }
            }
          }
          console.log('Final Document: ');
          console.log(finalDocument);

          let oddsData = finalDocument;
          console.log(oddsData);
          dispatch(receiveOdds(oddsData));
        }),
      )
      .catch(error => {
        dispatch({ type: 'FETCH_DATA_REJECTED', odds: error });
      });
  };
};
