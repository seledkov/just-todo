import React, { useState } from 'react';
import TodoAdd from './Components/TodoAdd';
import TodosFilters from './Components/TodosFilter';
import TodosList from './Components/TodosList';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodoHandler = (newTodo: ITodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };

  return (
    <div className='App'>
      <TodosFilters />
      <TodoAdd onAddTodo={addTodoHandler} />
      <TodosList todos={todos} />
    </div>
  );
};

export default App;
