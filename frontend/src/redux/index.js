import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from 'redux-saga';
import { all } from 'redux-saga/effects';
import thunkMiddleware from 'redux-thunk';

import todoReducers from './todo/reducers.js';
import userReducers from './user/reducers.js';
import { authWatcher, getCheckWatcher } from './user/saga/watchers.js';
import {
  delWatcher,
  doneWatcher,
  editWatcher,
  refreshWatcher,
  searchWatcher,
} from './todo/saga/watchers.js';

const sagaMiddleware = saga();

export const reducers = combineReducers({
  userReducers,
  todoReducers,
});

const composeEnhancer =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunkMiddleware, sagaMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware));

export const store = createStore(reducers, composeEnhancer);

// sagaMiddleware.run(delWatcher);
sagaMiddleware.run(function* () {
  yield all([
    authWatcher(),
    delWatcher(),
    doneWatcher(),
    editWatcher(),
    searchWatcher(),
    refreshWatcher(),
    getCheckWatcher(),
  ]);
});
