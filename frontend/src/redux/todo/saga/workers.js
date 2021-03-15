import { put, call } from 'redux-saga/effects';
import {
  fetchDel,
  fetchDone,
  fetchEdit,
  fetchRefresh,
  fetchSearch,
} from './asyncFunc.js';
// import {loadStartAC, loadEndAC} from "../../loader/actions";
import {
  doneAC,
  delAC,
  editAC,
  refreshAC,
  loadStartAC,
  loadEndAC,
  loadStartMainAC,
  loadEndMainAC,
  searchAC,
} from '../actions';

export function* delWorker(id) {
  yield put(loadStartAC(id.payload.arg));
  try {
    const data = yield call(fetchDel, id.payload.arg);
    if (data.message === 'okay') yield put(delAC(id.payload.arg));
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    yield put(loadEndAC(id));
  }
}
export function* doneWorker(todo) {
  try {
    const data = yield call(fetchDone, todo.payload);
    yield put(doneAC(data));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

export function* editWorker(arg) {
  try {
    const editedTask = yield call(fetchEdit, arg.payload);
    yield put(editAC(editedTask));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
export function* refreshWorker() {
  yield put(loadStartMainAC());
  try {
    const data = yield call(fetchRefresh);
    yield put(refreshAC(data));
  } catch (error) {
    console.error('Ошибка:', error);
  } finally {
    yield put(loadEndMainAC());
  }
}

export function* searchWorker({ payload }) {
  try {
    const data = yield call(fetchSearch, payload);
    yield put(searchAC(data));
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
