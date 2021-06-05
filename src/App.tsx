import React, { useState } from 'react';
import TodoAdd from './Components/TodoAdd';
import TodosFilters from './Components/TodosFilter';
import TodosList from './Components/TodosList';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodoHandler = (newTodo: ITodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };
  const completeTodoToggle = (todoId: string) => {
    const changedTodos = todos.map((todo: ITodo) => {
      if (todo.id === todoId) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos([...changedTodos]);
  };
  return (
    <div className='App'>
      <TodosFilters />
      <TodoAdd onAddTodo={addTodoHandler} />
      <TodosList todos={todos} onCompleteTodoToggle={completeTodoToggle} />
    </div>
  );
};

export default App;
