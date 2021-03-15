import React from 'react';
import Task from '../components/Task.js';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const tasksArr = useSelector((state) => state.todoReducers);
  const tasks = tasksArr.todos
  return (
    <div>
      <h1 className='offset-md-3'>Todo List</h1>
      <ul className='list-group'>
        {tasks.length > 0 ? tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        }) :
          <p className={"animate-pulse"}>There isn't any task yet</p>}
      </ul>
    </div>
  );
};

export default TaskList;
