import * as actionTypes from "./types";
export const getUsers = () => {
  return (dispatch, getState) => {
    dispatch({ type: actionTypes.GET_USERS_PENDING });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch({
          type: actionTypes.GET_USERS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.GET_USERS_FAILURE,
        });
      });
  };
};

export const storeData = ({ data }) => {
  return {
    type: actionTypes.STORE_DATA,
    payload: { data },
  };
};
