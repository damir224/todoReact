import { takeEvery } from 'redux-saga/effects';
import actionTypes from '../../actionTypes.js';
import {
  delWorker,
  doneWorker,
  editWorker,
  refreshWorker,
  searchWorker,
} from './workers.js';

export function* delWatcher() {
  yield takeEvery(actionTypes.DEL_TODO_SAGA, delWorker);
}
export function* doneWatcher() {
  yield takeEvery(actionTypes.DONE_TODO_SAGA, doneWorker);
}
export function* editWatcher() {
  yield takeEvery(actionTypes.EDIT_TODO_SAGA, editWorker);
}
export function* refreshWatcher() {
  yield takeEvery(actionTypes.REF_TODO_SAGA, refreshWorker);
}
export function* searchWatcher() {
  yield takeEvery(actionTypes.SEARCH_TODO_SAGA, searchWorker);
}
