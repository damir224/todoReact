import actionTypes from '../actionTypes';

export const addTodoAC = (todo) => ({
  type: actionTypes.ADD_TODO,
  payload: todo,
});

export const delAC = (arg) => ({
  type: actionTypes.DEL_TODO,
  payload: { arg: arg },
});
export const delSagaAC = (arg) => ({
  type: actionTypes.DEL_TODO_SAGA,
  payload: { arg: arg },
});

export const doneAC = (todo) => ({
  type: actionTypes.DONE_TODO,
  payload: todo,
});
export const doneSagaAC = (todo) => ({
  type: actionTypes.DONE_TODO_SAGA,
  payload: todo,
});

export const editAC = (todo) => ({
  type: actionTypes.EDIT_TODO,
  payload: todo,
});
export function editSagaAC(id, editedTaskName) {
  return {
    type: actionTypes.EDIT_TODO_SAGA,
    payload: { id, editedTaskName },
  };
}

export const refreshAC = (todos) => ({
  type: actionTypes.REF_TODO,
  payload: todos.taskForClient,
});
export const refreshSagaAC = () => {
  return {
    type: actionTypes.REF_TODO_SAGA,
  };
};

export const addTodoThunk = (arg) => async (dispatch, getState) => {
  const url = 'http://localhost:3100/todo/add';
  const data = { taskName: arg, isDone: false };
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const todo = await response.json();
    dispatch(addTodoAC(todo));
  } catch (error) {
    console.error('Err:', error);
  }
};

export const loadStartAC = (id) => {
  return {
    type: actionTypes.LOAD_START,
    payload: id,
  };
};
export const loadEndAC = (id) => ({
  type: actionTypes.LOAD_END,
  payload: id,
});
export const loadStartMainAC = () => {
  return {
    type: actionTypes.LOAD_START_MAIN,
  };
};
export const loadEndMainAC = () => ({
  type: actionTypes.LOAD_END_MAIN,
});

export const searchAC = ({ searched }) => {
  return {
    type: actionTypes.SEARCH_TODO,
    payload: searched,
  };
};
export const searchSagaAC = (searchEl) => ({
  type: actionTypes.SEARCH_TODO_SAGA,
  payload: { searchEl },
});
