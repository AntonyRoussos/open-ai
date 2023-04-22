import * as actionTypes from "./types";

const INITIAL_STATE = {
  users: [],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_PENDING:
      return {
        ...state,
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
      };
    case actionTypes.GET_USERS_FAILURE:
      return {
        ...state,
      };
    case actionTypes.STORE_DATA:
      return {
        ...state,
        users: action.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
