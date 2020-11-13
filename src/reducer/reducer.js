import { UPD_COLOR, FORM_SUBMITTED, RESET } from '../utils/types';

export const INITIAL_STATE = {
  red: '150',
  green: '150',
  blue: '150',
};

export const init = (initialState) => initialState;

export const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPD_COLOR:
      return { ...state, [payload.name]: payload.value };
    case FORM_SUBMITTED:
      return { ...state };
    case RESET:
      return init(INITIAL_STATE);
    default:
      return INITIAL_STATE;
  }
};
