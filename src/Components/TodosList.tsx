import React from 'react';
import Todo from './Todo';

const TodosList = (props: any) => {
  const renderList = props.todos.map((item: ITodo) => {
    return <Todo key={item.id} id={item.id} text={item.text} isDone={item.isDone} />;
  });

  return <ul>{props.todos.length > 0 ? renderList : 'please add todo'}</ul>;
};

export default TodosList;
