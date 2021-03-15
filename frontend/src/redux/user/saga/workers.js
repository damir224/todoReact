import { put, call } from 'redux-saga/effects';
import { signupAC, logoutAC } from '../actions';
import { authFetch, getCheckFetch } from './asyncFunc.js';

export function* authWorker({ payload }) {
  try {
    const data = yield call(authFetch, payload);
    yield put(signupAC(data));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* getCheckWorker() {
  try {
    const data = yield call(getCheckFetch);
    yield put(signupAC(data));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// export const loginHandler = (user) => async (dispatch) => {
//   const url = 'http://localhost:3100/auth/login';
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(user),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const userInfo = await response.json();
//     dispatch(loginAC(userInfo));
//     console.log('Успех:', JSON.stringify(userInfo));
//   } catch (error) {
//     console.error('Ошибка:', error);
//   }
// };
