import React from 'react';
import Todo from './Todo';

const TodosList = (props: any) => {
  const renderList = props.filteredTodos.map((item: ITodo) => {
    return (
      <Todo
        key={item.id}
        id={item.id}
        text={item.text}
        isDone={item.isDone}
        onCompleteTodoToggle={() => props.onCompleteTodoToggle(item.id)}
        onRemoveTodo={() => props.onRemoveTodo(item.id)}
      />
    );
  });
  console.log(renderList);
  return <ul>{renderList.length > 0 ? renderList : 'please add todo'}</ul>;
};

export default TodosList;
