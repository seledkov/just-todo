import React, { useState } from 'react';
import './Todo.scss';
const Todo = (props: ITodo) => {
  return (
    <li className='todo'>
      <span
        onClick={props.onCompleteTodoToggle}
        className={props.isDone ? 'todo_done' : 'todo_undone'}>
        {props.text}{' '}
      </span>{' '}
      <button onClick={props.onRemoveTodo}>x</button>
    </li>
  );
};

export default Todo;
