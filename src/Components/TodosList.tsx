import React from 'react';
import Todo from './Todo';

const TodosList = (props: any) => {
  return (
    <div>
      ListTodos Отображение списка добавленных записей
      <Todo />
    </div>
  );
};

export default TodosList;
