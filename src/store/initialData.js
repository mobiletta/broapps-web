import { ODDS, BETS } from './dataTypes';

export const initialData = {
  modelData: {
    [ODDS]: [],
    [BETS]: [],
  },
  stateData: {
    editing: false,
    selectedId: -1,
    selectedType: ODDS,
  },
};
