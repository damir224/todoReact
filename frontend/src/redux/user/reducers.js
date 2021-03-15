import actionTypes from '../actionTypes';
const prelodableState = {
  user: { id: '', email: '', isAuth: false },
};
const userReducers = (state = prelodableState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGNUP_AUTH:
      return {
        ...state,
        user: { id: payload.id, email: payload.email, isAuth: true },
      };
    // case actionTypes.CHECK_AUTH:
    //   return { ...state, user: { email: payload.user.email, isAuth: true } };
    case actionTypes.LOGOUT_AUTH:
      return { ...state, user: { id: '', email: '', isAuth: false } };
    default:
      return state;
  }
};

export default userReducers;
