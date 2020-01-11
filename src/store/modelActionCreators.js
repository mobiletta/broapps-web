import { ODDS, BETS } from './dataTypes';
import { STORE, UPDATE, DELETE } from './modelActionTypes';

let idCounter = 100;

export const saveOdd = odd => {
  return createSaveEvent(ODDS, odd);
};

export const saveBet = bet => {
  return createSaveEvent(BETS, bet);
};

const createSaveEvent = (dataType, payload) => {
  if (!payload.id) {
    return {
      type: STORE,
      dataType: dataType,
      payload: { ...payload, id: idCounter++ },
    };
  } else {
    return {
      type: UPDATE,
      dataType: dataType,
      payload: payload,
    };
  }
};

export const deleteOdd = odd => ({
  type: DELETE,
  dataType: ODDS,
  payload: odd.id,
});

export const deleteBet = bet => ({
  type: DELETE,
  dataType: BETS,
  payload: bet.id,
});
