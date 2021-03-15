import actionTypes from '../actionTypes';

export const authSagaAC = (email, password, path) => {
  return {
    type: actionTypes.AUTH_SAGA,
    payload: { email, password, path },
  };
};
export const signupAC = (data) => {
  return {
    type: actionTypes.SIGNUP_AUTH,
    payload: data,
  };
};

export const logoutAC = () => ({
  type: actionTypes.LOGOUT_AUTH,
});

export const getCheckAC = () => {
  return {
    type: actionTypes.CHECK_AUTH,
  };
};
export const getCheckSagaAC = () => {
  return {
    type: actionTypes.CHECK_AUTH_SAGA,
  };
};
