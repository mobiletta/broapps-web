import { FETCH_ODDS } from '../actions/odds';

const initialState = { odds: [] };
export default function oddsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ODDS:
      return action.odds;
    default:
      return state;
  }
}
