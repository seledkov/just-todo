import React, { useState } from 'react';
import './Todo.scss';
const Todo = (props: ITodo) => {
  return (
    <li className='todo' onClick={props.onCompleteTodoToggle}>
      <span className={props.isDone ? 'todo__done' : 'todo__undone'}>{props.text} </span>
    </li>
  );
};

export default Todo;
