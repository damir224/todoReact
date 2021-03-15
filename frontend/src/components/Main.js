import Form from '../components/Form.js';
import TaskList from '../components/TaskList.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshSagaAC } from '../redux/todo/actions.js';
import Spinner from 'react-svg-spinner';

export default function Main() {
  const dispatch = useDispatch();
  const { mainStatus } = useSelector((state) => state.todoReducers.loading);

  useEffect(() => {
    dispatch(refreshSagaAC());
  }, [dispatch]);

  return (
    <>
      <div className='h-100 w-full flex items-center justify-center bg-teal-lightest font-sans'>
        <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
          <div className='mb-4'>
            <h1 className='text-grey-darkest'>Todo List</h1>
            <div className='flex mt-4'>
              <Form />
            </div>
          </div>

          <div>
            {mainStatus ? <Spinner height='64px' width='64px' /> : <TaskList />}
          </div>
        </div>
      </div>
    </>
  );
}
