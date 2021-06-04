import React, { useState } from 'react';
import './Todo.scss';
const Todo = (props: any) => {
  const [isDone, setIsDone] = useState(false);
  const colorHandler = () => {
    setIsDone((prevState) => !prevState);
  };
  return (
    <div className='todo' onClick={colorHandler}>
      <p className={isDone ? 'todo__done' : 'todo__undone'}>
        todo text Переключение статуса записи Выполнено / Невыполненный при клике на её название
      </p>
    </div>
  );
};

export default Todo;
