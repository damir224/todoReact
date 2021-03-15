import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoThunk } from '../redux/todo/actions.js';
import { searchSagaAC } from '../redux/todo/actions.js';
// import { useCookies } from "react-cookie";

function Form() {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [search, setSearch] = useState('');

  const addTaskHandler = async (event) => {
    event.preventDefault();
    (() => dispatch(addTodoThunk(task)))();
    event.target.task.value = '';
  };
  const searchHandler = async (event) => {
    event.preventDefault();
    dispatch(searchSagaAC(search));
  };

  const validationHandler = (e) => {
    setTask(e.target.value);
  };
  const validationTaskHandler = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    dispatch(searchSagaAC(search));
  }, [dispatch, search]);

  return (
    <>
      <div className='flex-col'>
        <form className='flex mt-4' onSubmit={addTaskHandler}>
          <input
            onChange={validationHandler}
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
            placeholder='What needs to be done'
            name='task'
          />
          <button
            className='flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal'
            type='submit'
          >
            Add
          </button>
        </form>
        <form className='flex mt-4' onSubmit={searchHandler}>
          <input
            onChange={validationTaskHandler}
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
            placeholder='Type here to search'
            name='task'
          />
          <button
            className='flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal'
            type='submit'
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
