import React, { useState } from 'react';
import './Todo.scss';
const Todo = (props: ITodo) => {
  const complitedHandler = () => {};
  return (
    <li className='todo' onClick={complitedHandler}>
      <p className={props.isDone ? 'todo__done' : 'todo__undone'}>
        <span>{props.text} </span>
        // Переключение статуса записи Выполнено / Невыполненный при клике на её название
      </p>
    </li>
  );
};

export default Todo;
