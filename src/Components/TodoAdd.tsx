import React, { useState } from 'react';
import './TodoAdd.scss';
const TodoAdd = (props: any) => {
  const [entreredTodo, setEnteredTodo] = useState('');

  const addTodo = () => {
    if (entreredTodo.length <= 10) {
      props.onAddTodo({
        id: Math.random().toString(),
        text: entreredTodo,
        isDone: false,
      });
      setEnteredTodo('');
      console.log('correct length');
    } else {
      console.log('need lenght < or = 10 symbols', entreredTodo);
    }
  };
  return (
    <div className='todo-add'>
      <input
        className={entreredTodo.length <= 10 ? 'todo-add__correct' : 'todo-add__incorrect'}
        type='text'
        value={entreredTodo}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            addTodo();
          }
        }}
        onChange={(event: any) => {
          setEnteredTodo(event.target.value);
        }}
      />{' '}
      <button onClick={addTodo}> Add todo</button>
    </div>
  );
};

export default TodoAdd;
