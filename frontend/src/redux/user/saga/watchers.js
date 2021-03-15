import { takeEvery } from 'redux-saga/effects';
import actionTypes from '../../actionTypes';
import { authWorker, getCheckWorker } from './workers';

export function* authWatcher() {
  yield takeEvery(actionTypes.AUTH_SAGA, authWorker);
}
export function* getCheckWatcher() {
  yield takeEvery(actionTypes.CHECK_AUTH_SAGA, getCheckWorker);
}
