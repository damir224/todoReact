import actionTypes from '../actionTypes';
const prelodableState = {
  todos: [],
  loading: {
    mainStatus: false,
    status: false,
    idEl: '',
  },
};
const todoReducers = (state = prelodableState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case actionTypes.DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((e) => e.id !== action.payload.arg),
      };
    case actionTypes.DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((e) =>
          e.id === action.payload.id
            ? { ...e, isDone: action.payload.isDone }
            : e
        ),
      };
    case actionTypes.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((e) =>
          e.id === action.payload.id
            ? { ...e, taskName: action.payload.taskName }
            : e
        ),
      };
    case actionTypes.REF_TODO:
      return { ...state, todos: action.payload };

    case actionTypes.LOAD_START:
      return { ...state, loading: { status: true, idEl: action.payload } };
    case actionTypes.LOAD_END:
      return { ...state, loading: { status: false, idEl: '' } };
    case actionTypes.LOAD_START_MAIN:
      return { ...state, loading: { mainStatus: true } };
    case actionTypes.LOAD_END_MAIN:
      return { ...state, loading: { mainStatus: false } };
    case actionTypes.SEARCH_TODO:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todoReducers;
