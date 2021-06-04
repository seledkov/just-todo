import React, { useState } from 'react';
import './TodoAdd.scss';
const TodoAdd = (props: any) => {
  const [entreredTodo, setEnteredTodo] = useState('');
  const addTodoHandler = () => {
    if (entreredTodo.length <= 10) {
      console.log('correct length');
    } else {
      console.log('need lenght < or = 10 symbols', entreredTodo);
    }
  };
  return (
    <div>
      <p>
        Добавление новой записи Новая запись добавляет при условии, что её длина меньше N символов
        или равна ей
      </p>
      <input
        className={entreredTodo.length <= 10 ? 'todo-add__correct' : 'todo-add__incorrect'}
        type='text'
        value={entreredTodo}
        onChange={(event: any) => {
          setEnteredTodo(event.target.value);
        }}
      />{' '}
      <button onClick={addTodoHandler}> Add todo</button>
    </div>
  );
};

export default TodoAdd;
