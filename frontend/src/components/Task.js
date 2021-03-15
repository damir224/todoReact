import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delSagaAC, editSagaAC, doneSagaAC } from '../redux/todo/actions.js';

const Task = ({ task = [] }) => {
  const dispatch = useDispatch();
  const { status, idEl } = useSelector((state) => state.todoReducers.loading);
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState('');
  const delClassNameLoadStart =
    'flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-200';
  const delClassNameLoadEnd =
    'animate-bounce flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-200';

  let classNameInput =
    'shadow appearance-none border rounded py-2 px-3 text-grey-darker';

  const onClickEditHandler = (task) => {
    setEdit(true);
    setSave(task.taskName);
  };
  const changingHandler = ({ target: { value } }) => {
    setSave(value);
  };
  const onClickSaveHandler = (id) => {
    setEdit(false);
    dispatch(editSagaAC(id, save));
  };
  return (
    <li className='flex mb-4 items-center justify-between'>
      {edit ? (
        <input
          className={classNameInput}
          onChange={changingHandler}
          type='text'
          name='name'
          value={save}
        />
      ) : (
        <div
          className='ml-2'
          onClick={() => dispatch(doneSagaAC(task))}
          style={{ textDecoration: task.isDone ? 'line-through' : '' }}
        >
          {task.taskName}
        </div>
      )}
      <div>
        <button
          onClick={() => dispatch(delSagaAC(task.id))}
          type='button'
          className={
            status && task.id === idEl
              ? delClassNameLoadEnd
              : delClassNameLoadStart
          }
        >
          del
        </button>

        {edit ? (
          <input
            onClick={() => onClickSaveHandler(task.id)}
            type='button'
            className='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-300'
            value='save'
          />
        ) : (
          <input
            onClick={() => onClickEditHandler(task)}
            type='button'
            className='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey-300'
            value='edt'
          />
        )}
      </div>
    </li>
  );
  // return status ? (
  //   <li className='animate-spin flex mb-4 items-center justify-between'>
  //     {edit ? (
  //       <input
  //         className={classNameInput}
  //         onChange={changingHandler}
  //         type='text'
  //         name='name'
  //         defaultValue={task.taskName}
  //       />
  //     ) : (
  //       <div
  //         className='ml-2'
  //         onClick={() => dispatch(doneSagaAC(task))}
  //         style={{ textDecoration: task.isDone ? 'line-through' : '' }}
  //       >
  //         {task.taskName}
  //       </div>
  //     )}
  //     <div>
  //       <button
  //         onClick={() => dispatch(delSagaAC(task.id))}
  //         type='button'
  //         className='flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-200'
  //       >
  //         del
  //       </button>

  //       {edit ? (
  //         <input
  //           onClick={() => onClickSaveHandler(task.id)}
  //           type='button'
  //           className='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-300'
  //           value='save'
  //         />
  //       ) : (
  //         <input
  //           onClick={() => onClickEditHandler(task.id)}
  //           type='button'
  //           className='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey-300'
  //           value='edt'
  //         />
  //       )}
  //     </div>
  //   </li>
  // ) : (
  //   <li className='flex mb-4 items-center justify-between'>
  //     {edit ? (
  //       <input
  //         className={classNameInput}
  //         onChange={changingHandler}
  //         type='text'
  //         name='name'
  //         defaultValue={task.taskName}
  //       />
  //     ) : (
  //       <div
  //         className='ml-2'
  //         onClick={() => dispatch(doneSagaAC(task))}
  //         style={{ textDecoration: task.isDone ? 'line-through' : '' }}
  //       >
  //         {task.taskName}
  //       </div>
  //     )}
  //     <div>
  //       <button
  //         onClick={() => dispatch(delSagaAC(task.id))}
  //         type='button'
  //         className='flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-200'
  //       >
  //         del
  //       </button>

  //       {edit ? (
  //         <input
  //           onClick={() => onClickSaveHandler(task.id)}
  //           type='button'
  //           className='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-300'
  //           value='save'
  //         />
  //       ) : (
  //         <input
  //           onClick={() => onClickEditHandler(task.id)}
  //           type='button'
  //           className='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey-300'
  //           value='edt'
  //         />
  //       )}
  //     </div>
  //   </li>
  // );
};

export default Task;
